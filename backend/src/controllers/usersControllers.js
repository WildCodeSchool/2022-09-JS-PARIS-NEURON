const { neuron } = require("../../neuron");

/**
 * Créer un getUserByEmail function
 * Créer un saveUserSettings function
 *
 */

const getUsers = (req, res) => {
  neuron
    .query(`SELECT * FROM users`)
    .then(([users]) => {
      res.status(201).json(users);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const createUser = (req, res) => {
  const { username, hashedpassword, mail, chat_id } = req.body;

  neuron
    .query(
      "INSERT INTO users (username, hashedpassword, mail, role, status, chat_id) VALUES (?, ?, ?, 'user', false, ?)",
      [username, hashedpassword, mail, chat_id]
    )
    .then(() => {
      res.status(201).json("neuron créé");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("informations erronées");
    });
};

// const getUserByEmail = (email) => {
//   let user;

//   return neuron
//     .query("SELECT * FROM users WHERE mail = ?", [email])
//     .then(([users]) => {
//       if (users[0] != null) {
//         // eslint-disable-next-line prefer-destructuring
//         // req.user = users[0];
//         user = users[0];
//         return user;
//       }
//       return null;
//     });
// };

const registerWithMail = (req, res, next) => {
  const { mail } = req.body;

  neuron
    .query("SELECT * FROM users WHERE mail = ?", [mail])
    .then(([users]) => {
      if (users[0] != null) {
        // eslint-disable-next-line prefer-destructuring
        req.user = users[0];
        next();
      } else {
        res.status(401).json("erreur email ou mot de passe");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const logout = (req, res) => {
  const { token } = req.body;

  neuron
    .query("INSERT INTO blacklist(token) VALUE (?)", [token])
    .then(() => {
      res.status(201).json("deconnecté");
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getUsers,
  createUser,
  registerWithMail,
  logout,
  // getUserByEmail,
};
