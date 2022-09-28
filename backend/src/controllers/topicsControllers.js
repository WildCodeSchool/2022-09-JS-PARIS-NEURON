const { neuron } = require("../../neuron");

const getCategories = (req, res) => {
  neuron
    .query(`SELECT * FROM categories`)
    .then(([categories]) => {
      res.status(201).json(categories);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getTopics = (req, res) => {
  neuron
    .query(
      `SELECT *, DATE_FORMAT(date, "%d/%m/%Y") AS date FROM topics ORDER BY date DESC`
    )
    .then(([topics]) => {
      res.status(201).json(topics);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getTopicsByTags = (req, res) => {
  const { tag } = req.query;

  neuron
    .query(
      `SELECT *, DATE_FORMAT(date, "%d/%m/%Y") AS date FROM topics_has_tags AS tht JOIN topics ON topics.id=tht.topics_id JOIN tags ON tags.id=tht.tags_id WHERE name=? ORDER BY date_topic DESC`,
      [tag]
    )
    .then(([topics]) => {
      if (topics[0] != null) {
        res.status(201).json(topics);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const createTopic = (req, res) => {
  const { title, topic, summary, chat_id, date, categories_id, users_id } =
    req.body;

  neuron
    .query(
      `INSERT INTO topics(title, topic, summary, chat_id, date, categories_id, users_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [title, topic, summary, chat_id, date, categories_id, users_id]
    )
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the topic");
    });
};

module.exports = { getCategories, getTopics, getTopicsByTags, createTopic };
