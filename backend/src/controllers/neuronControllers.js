const { neuron } = require("../../neuron");

const getUsers = (req, res) => {
  neuron
    .query(`select * from users`)
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
      "INSERT INTO users(username, hashedpassword, mail, role, status, chat_id) VALUES (?, ?, ?, 'admin', false, ?)",
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

const getCategories = (req, res) => {
  neuron
    .query(`select * from categories`)
    .then(([categories]) => {
      res.status(201).json(categories);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getUsers,
  getCategories,
  createUser,
};
