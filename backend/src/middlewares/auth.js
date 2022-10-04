const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require("dotenv").config();

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16 /* Coût en mémoire, */,
  timeCost: 5 /* utilisation CPU, */,
  parallelism: 1 /* nombre de tâches en parallèle */,
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedpassword) => {
      req.body.hashedpassword = hashedpassword;
      delete req.body.password;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

const verifyPassword = (req, res) => {
  argon2
    .verify(req.user.hashedpassword, req.body.password)
    .then((isVerified) => {
      if (isVerified) {
        const xsrfToken = crypto.randomBytes(64).toString("hex");
        const payload = { mail: req.user.mail, xsrfToken };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "24h",
        });
        delete req.user.hashedpassword;
        res.cookie("token", token, {
          httpOnly: true,
          // secure: true,
          maxAge: 24 * 60 * 60 * 1000,
        });
        res.send({ xsrfToken, user: req.user, message: "connecté" });
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// eslint-disable-next-line consistent-return
const verifyToken = (req, res, next) => {
  try {
    const { cookies, headers } = req;

    if (!cookies || !cookies.token) {
      return res.status(401).json({ message: "Missing token in cookie" });
    }

    const { token } = cookies;

    if (!headers || !headers["x-xsrf-token"]) {
      return res.status(401).json({ message: "Missing XSRF token in headers" });
    }

    const xsrfToken = headers["x-xsrf-token"];

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (xsrfToken !== decodedToken.xsrfToken) {
      return res.status(401).json({ message: "Bad xsrf token" });
    }

    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
  verifyToken,
};
