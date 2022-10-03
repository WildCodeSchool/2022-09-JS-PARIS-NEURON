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
      "INSERT INTO users(username, hashedpassword, mail, role, status, chat_id) VALUES (?, ?, ?, 'user', false, ?)",
      [username, hashedpassword, mail, chat_id]
    )
    .then(([result]) => {
      res.location(`/api/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the user");
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
        res.sendStatus(401);
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
    .then(([result]) => {
      res.status(201).json(result);
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

// const getTag = (req, res) => {
//   const { tag } = req.body;

//   neuron.query(
//     "SELECT * FROM tags JOIN users ON users.id = tags.users_id JOIN comments ON users_id = tags.users_id JOIN topics_has_tags ON tags_id = tags.id JOIN topics_has_tags ON topics_has_tags ON topics_id=tags.id "
//   );
// };

module.exports = {
  getUsers,
  createUser,
  registerWithMail,
  logout,
  // getTag
};
