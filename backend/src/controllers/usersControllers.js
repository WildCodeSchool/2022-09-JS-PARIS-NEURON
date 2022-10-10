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

// const { mail } = req.body;

// neuron
//   .query("SELECT * FROM users WHERE mail = ?", [mail])
//   .then(([users]) => {
//     if (users[0] != null) {
//       // eslint-disable-next-line prefer-destructuring
//       req.user = users[0];
//       next();
//     } else {
//       res.sendStatus(401);
//     }
//   })

const getTagsFavorites = (req, res) => {
  const { id } = req.query;

  neuron
    .query("SELECT * FROM users_has_tags JOIN users ON users.id = users_has_tags.users_id WHERE users_id = ?",[id])
    .then(([result]) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send("impossible d'afficher les favoris");
    });
};

const removeTags = (req, res) => {
  const { id } = req.body;

  neuron
    .query("DELETE FROM users_has_tags WHERE users_id = ? ", [id])
    .then(() => {
      registerWithMail.status(201).json("supprimé des favoris");
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send("impossible de supprimer des favoris");
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
      " SELECT friend_id FROM followed INNER JOIN users ON followed.users_id = users.id WHERE users_id = ?",
      [id]
    )
    .then(([result]) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send("erreur impossible de récupérer les favoris");
    });
};

const getUserByFollowed = (req, res) => {
  const { idList } = req.query;

  const queryFragment = idList
    .map((id) => {
      return `id=${id}`;
    })
    .join(" OR ");

  return neuron
    .query(`SELECT id, username FROM users WHERE ${queryFragment}`)
    .then(([result]) => {
      return res.status(201).json(result);
    })
    .catch((err) => {
      console.warn(err);
      return res.status(500).send("c'est ballot");
    });
};

module.exports = {
  getUsers,
  createUser,
  registerWithMail,
  logout,
  getTagsFavorites,
  removeTags,
  addToFollowed,
  removeFromFollowed,
  getFollowed,
  getUserByFollowed,
};
