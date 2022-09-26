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
      res.sendStatus(500);
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
          expiresIn: "1h",
        });
        delete req.user.hashedpassword;
        console.warn("token: ", token, "xsrfToken: ", xsrfToken);
        res.cookie("token", token, {
          httpOnly: true,
          secure: true,
          maxAge: 3600000,
        });
        res.send({ xsrfToken, user: req.user });
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

    console.warn(req);

    console.warn("headers token:", headers["x-xsrf-token"]);
    console.warn("cookies: ", req.cookies);

    if (!cookies || !cookies.token) {
      return res.status(401).json({ message: "Missing token in cookie" });
    }

    const { token } = cookies.token;

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
