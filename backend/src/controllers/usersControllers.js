const argon2 = require("argon2");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
/* eslint-disable array-callback-return */
const { neuron } = require("../../neuron");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16 /* Coût en mémoire, */,
  timeCost: 5 /* utilisation CPU, */,
  parallelism: 1 /* nombre de tâches en parallèle */,
};

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
      "INSERT INTO users (username, hashedpassword, mail, role, status, chat_id) VALUES (?, ?, ?, 'user', false, ?)",
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
  const { isSettings } = req.query;
  neuron
    .query("SELECT * FROM users WHERE mail = ?", [mail || req.mail])
    .then(([users]) => {
      if (users[0] != null) {
        // eslint-disable-next-line prefer-destructuring
        req.user = users[0];
        if (isSettings && isSettings === "true") {
          res.json(users[0]);
        }
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

const createUserHashPassword = (password) => {
  return argon2
    .hash(password, hashingOptions)
    .then((hashedpassword) => {
      return hashedpassword;
    })
    .catch((err) => {
      console.error(err);
    });
};

// Example de fonction async await
// const createUserHashPasswordAsync = async(password) => {
//   try {
//     const hashedpassword = await argon2.hash(password, hashingOptions);
//     return hashedpassword;
//   } catch(err){
//     console.error(err);
//   }
// };

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

const verifyUserPassword = (hashedpassword, password) => {
  return argon2
    .verify(hashedpassword, password)
    .then((isVerified) => isVerified)
    .catch((err) => {
      console.error(err);
    });
};

const createSettingsQuery = (query, dataObj, dicoQuery, mail) => {
  const valuesArray = [];
  Object.keys(dataObj).forEach((key) => {
    if (dataObj[key] === "") delete dataObj[key];
  });
  Object.keys(dataObj).forEach((key, idx) => {
    // console.log(key) : affiche les clés donc password, linkedin etc...
    //  console.log(dataBody[key]) ou dicoToCreateQuery[key] : affiche les valuer donc oneblood@hotmail.fr, "url.linkedin.com" etc...
    if (dicoQuery[key] !== undefined) {
      query += `${dicoQuery[key]} = ?${
        idx !== Object.keys(dataObj).length - 1 ? "," : ""
      }`;
      valuesArray.push(dataObj[key]);
    }
  });
  query += `where mail = ?`;
  valuesArray.push(mail);
  return { query, valuesArray };
};

const updateSettings = async (req, res) => {
  if (
    req.body.new_password !== "" ||
    req.body.new_password !== null ||
    req.body.new_password !== undefined
  ) {
    req.body.new_password = await createUserHashPassword(req.body.new_password);
  }

  const query = "UPDATE users SET "; // "UPDATE user SET password = ?, email = ?, linkedin = ?, github = ?, description = ?, where mail = ?",
  const dicoToCreateQuery = {
    new_password: "hashedpassword",
    new_email: "mail",
    new_pseudo: "username",
    linkedin: "linkedin",
    github: "github",
    description: "description",
  };

  const mailUser = req.mail;
  const { query: queryToSet, valuesArray } = createSettingsQuery(
    query,
    req.body,
    dicoToCreateQuery,
    mailUser
  );
  if (req.body.new_email || req.body.new_password) {
    return verifyUserPassword(req.user.hashedpassword, req.body.password).then(
      (isVerified) => {
        if (isVerified) {
          neuron
            .query(queryToSet, valuesArray)
            .then(([result]) => {
              if (result.affectedRows === 0) {
                res.status(404).send("User Not Found");
              } else {
                const xsrfToken = crypto.randomBytes(64).toString("hex");
                const payload = { mail: req.body.new_email, xsrfToken };
                const token = jwt.sign(payload, process.env.JWT_SECRET, {
                  expiresIn: "24h",
                });
                delete req.user.hashedpassword;
                res.cookie("token", token, {
                  httpOnly: true,
                  // secure: true,
                  maxAge: 24 * 60 * 60 * 1000,
                });
                const resultToSend = {
                  xsrfToken,
                  user: req.user,
                  message: "Well Done User Updated",
                };
                res.json(resultToSend);
              }
            })
            .catch((error) => {
              console.error(error);
              res.status(500).send("Error in settings query");
            });
        } else {
          res.status(404).send("Wrong Password");
        }
      }
    );
  }
  neuron
    .query(queryToSet, valuesArray)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("User Not Found");
      } else {
        res.status(204).send("Well Done User Updated");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error in settings query");
    });
};

const getTagsFavorites = (req, res) => {
  const { id } = req.query;

  neuron
    .query(
      "SELECT * FROM users_has_tags INNER JOIN users ON users.id = users_has_tags.users_id INNER JOIN tags ON tags.id = users_has_tags.tags_id WHERE users_id = ?",
      [id]
    )
    .then(([result]) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send("impossible d'afficher les favoris");
    });
};

const addTagsFavorites = (req, res) => {
  const { id } = req.query;

  neuron
    .query(
      "INSERT INTO users_has_tags (users_id, tags_id) VALUES (?, ?) SELECT ?, ? WHERE NOT EXISTS (SELECT * FROM users_has_tags WHERE (users_id=?) AND (tags_id=?))",
      [id]
    )
    .then(() => {
      res.status(201).json("ajouté aux favoris");
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send("Une erreur s'est produite");
    });
};

const removeFromTagsFavorites = (req, res) => {
  const { id } = req.query;

  neuron
    .query("DELETE FROM users_has_tags WHERE users_id = ? AND tags_id = ? ", [
      id,
    ])
    .then(() => {
      res.status(201).json("supprimé des favoris");
    })
    .catch((err) => {
      console.warn(err);
      res.status(500).send("impossible de supprimer des favoris");
    });
};

const addToFollowed = (req, res) => {
  const { id } = req.query;

  neuron
    .query(
      "INSERT INTO followed (users_id, friend_id) VALUES (?, ?) SELECT ?, ? WHERE NOT EXISTS (SELECT * FROM followed WHERE (user_id = ?) AND (friend_id = ?))",
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
  const { id } = req.query;

  neuron
    .query("DELETE FROM followed WHERE (users_id=?) AND (friend_id=?)", [id])
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
  addTagsFavorites,
  removeFromTagsFavorites,
  updateSettings,
  addToFollowed,
  removeFromFollowed,
  getFollowed,
  getUserByFollowed,
};
