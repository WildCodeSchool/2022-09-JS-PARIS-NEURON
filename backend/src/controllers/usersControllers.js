/* eslint-disable array-callback-return */
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

// const getUsersById = (req, res) => {
//   const { id } = req.body;
//   neuron
//     .query(`SELECT * FROM users WHERE id = ?`, [id])
//     .then(([users]) => {
//       res.status(201).json(users);
//     })
//     .catch((err) => {
//       console.warn(err);
//       res.sendStatus(500);
//     });
// };

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

const addToFollowed = (req, res) => {
  const { id } = req.body;

  neuron
    .query(
      "INSERT INTO followed (id) VALUES (?), JOIN users ON users.id=followed.user_id",
      [id]
    )
    .then(() => {
      res.status(201).json("ajouté aux favoris");
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send("erreur impossible d'ajouter aux favoris");
    });
};

const removeFromFollowed = (req, res) => {
  const { id } = req.body;

  neuron
    .query("DELETE FROM followed WHERE id = ?", [id])
    .then(() => {
      res.status(201).json("supprimé des favoris");
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send("erreur impossible de supprimer des favoris");
    });
};

const getFollowed = (req, res) => {
  const { id } = req.query;
  neuron
    .query(
      " SELECT followed FROM followed INNER JOIN users ON followed.users_id = users.id WHERE users.id = ?",
      [id] // id de l'utilisateur
    )
    .then((result) => {
      console.warn("result: ", result);
      let firstPromise = new Promise((resolve, reject) => {
        resolve("OK");
        reject(new Error("something bad happened about firstPromise"));
      });
      result[0].map((elem) => {
        console.warn("elem: ", elem.followed);
        firstPromise = firstPromise.then(() => {
          const { followed } = elem;
          console.warn("followed: ", followed);
          return neuron.query(`SELECT * FROM users WHERE id = ${followed}`);
        });
      });
    })
    .then(([users]) => {
      console.warn(users);
      res.status(201).json(users);
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send("erreur impossible de récupérer les favoris");
    });
};

module.exports = {
  getUsers,
  createUser,
  registerWithMail,
  logout,
  addToFollowed,
  removeFromFollowed,
  getFollowed,
};
