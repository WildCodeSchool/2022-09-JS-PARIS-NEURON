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
};
