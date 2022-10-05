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

const getPrivateMessage = (req, res) => {
  neuron
    .query(
      `SELECT * FROM private_messages_has_users JOIN users ON users.id=private_messages_has_users.users_id JOIN private_messages ON private_messages.id=private_messages_has_users.private_messages_id ORDER BY date_pm DESC `
      // SELECT *, JOIN topics ON topics.id=tht.topics_id JOIN tags ON tags.id=tht.tags_id WHERE name=? ORDER BY date DESC
    )
    .then(([private_messages]) => {
      res.status(201).json(private_messages);
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
  getPrivateMessage,
};
