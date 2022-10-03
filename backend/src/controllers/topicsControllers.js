/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
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
      `SELECT *, DATE_FORMAT(date, "%d/%m/%Y") AS date FROM topics_has_tags AS tht JOIN topics ON topics.id=tht.topics_id JOIN tags ON tags.id=tht.tags_id WHERE tag=? ORDER BY date DESC`,
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
  const {
    title,
    topic,
    summary,
    chat_id,
    date,
    categories_id,
    users_id,
    tags,
  } = req.body;

  neuron
    .query(
      `INSERT INTO topics (title, topic, summary, chat_id, date, categories_id, users_id) VALUES (?, ?, ?, ?, ?, ?, ?) `,
      [title, topic, summary, chat_id, date, categories_id, users_id]
    )
    .then(() => {
      let promise = new Promise((resolve) => {
        resolve("foo");
      });
      tags.map((tag) => {
        promise = promise.then(() => {
          return neuron.query(
            `INSERT INTO tags (tag) SELECT (?) WHERE NOT EXISTS ( SELECT * FROM tags WHERE (tag=?) ) `,
            [tag, tag]
          );
        });
      });
    })
    .then(() => {
      let promise2 = new Promise((resolve) => {
        resolve("foo");
      });
      tags.map((tag) => {
        promise2 = promise2.then(() => {
          return neuron.query(
            `INSERT INTO topics_has_tags (topics_id, tags_id) SELECT topics.id, tags.id FROM topics, tags WHERE topics.title=? AND tags.tag=? `,
            [title, tag]
          );
        });
      });
    })
    .then(() => {
      res.status(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the topic");
    });
};

module.exports = { getCategories, getTopics, getTopicsByTags, createTopic };
