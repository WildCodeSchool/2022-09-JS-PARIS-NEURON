const { neuron } = require("../../neuron");

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
      "INSERT INTO users (username, hashedpassword, mail, role, status, chat_id) SELECT ?, ?, ?, 'user', false, ? WHERE NOT EXISTS ( SELECT * FROM users WHERE (username=?) OR (mail=?))",
      [username, hashedpassword, mail, chat_id, username, mail]
    )
    .then(([result]) => {
      if (!result.affectedRows) {
        res.status(401).json("pseudo ou email déjà utilisé");
      } else {
        res.status(201).json("neuron créé, connectez vous");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("informations erronées");
    });
};

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
};
