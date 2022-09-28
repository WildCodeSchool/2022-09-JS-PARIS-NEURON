const { neuron } = require("../../neuron");

const getEmail = (req, res) => {
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

module.exports = { getEmail };
