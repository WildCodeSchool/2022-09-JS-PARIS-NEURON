const { neuron } = require("../../neuron");

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

module.exports = { getCategories };
