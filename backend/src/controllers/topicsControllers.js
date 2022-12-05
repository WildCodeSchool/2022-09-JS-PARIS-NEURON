/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
const { neuron } = require("../../neuron");

const getTagsTop = (req, res) => {
  neuron
    .query(
      `SELECT tags.tag AS label, count(*) AS value FROM topics_has_tags AS tht INNER JOIN topics ON topics.id=tht.topics_id INNER JOIN tags ON tags.id=tht.tags_id GROUP BY tags.tag ORDER BY value DESC limit 10`
    )
    .then(([tags]) => {
      console.warn(tags);
      res.status(200).json(tags);
    })
    .catch((err) => res.status(500).json(err));
};

const getCategories = (req, res) => {
  neuron
    .query(`SELECT * FROM categories`)
    .then(([categories]) => {
      res.status(200).json(categories);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getTopics = (req, res) => {
  neuron
    .query(
      `SELECT *, DATE_FORMAT(date, "%d/%m/%Y") AS date FROM topics_has_tags AS tht JOIN topics ON topics.id=tht.topics_id JOIN tags ON tags.id=tht.tags_id GROUP BY topics.id ORDER BY topics.id DESC`
    )
    .then(([topics]) => {
      res.status(200).json(topics);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getTopicsByTitle = (req, res) => {
  const { string } = req.query;
  const newQuery = `SELECT *, DATE_FORMAT(date, "%d/%m/%Y") AS date FROM topics WHERE title LIKE '%${string.replaceAll(
    " ",
    "%' OR title LIKE '%"
  )}%' ORDER BY id DESC`;
  console.warn(newQuery);

  neuron
    .query(newQuery)
    .then(([topics]) => {
      if (topics[0] != null) {
        res.status(200).json(topics);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getTopicById = (req, res) => {
  const { id } = req.query;

  neuron
    .query(
      `SELECT *, DATE_FORMAT(date, "%d/%m/%Y") AS date FROM topics JOIN categories ON categories.id=topics.categories_id JOIN users ON users.id=topics.users_id WHERE topics.id=?; SELECT tags.id, tags.tag FROM topics_has_tags AS tht JOIN topics ON topics.id=tht.topics_id JOIN tags ON tags.id=tht.tags_id WHERE tht.topics_id=?`,
      [id, id]
    )
    .then(([topic]) => {
      if (topic[0] != null) {
        res.status(200).json(topic);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

const getTopicByTags = (req, res) => {
  const { string } = req.query;
  console.warn(string);

  const newQuery = `SELECT  *, DATE_FORMAT(date, "%d/%m/%Y") AS date FROM topics_has_tags AS tht INNER JOIN topics ON topics.id=tht.topics_id INNER JOIN tags ON tags.id=tht.tags_id WHERE tags.tag='${string.replaceAll(
    ",",
    "' OR tags.tag='"
  )}' GROUP BY topics.id ORDER BY topics.id DESC`;

  neuron
    .query(newQuery)
    .then(([topic]) => {
      if (topic[0] != null) {
        res.status(200).json(topic);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

const getComments = (req, res) => {
  const { id } = req.query;

  neuron
    .query(
      `SELECT comments.id AS commentId, DATE_FORMAT(date_comment, "%d/%m/%Y") AS date_comment, comments.comment, comments.users_id AS userId, users.username  FROM comments LEFT JOIN users ON comments.users_id=users.id WHERE topics_id=? ORDER by comments.id`,
      [id]
    )
    .then(([comment]) => {
      console.warn(comment);
      if (comment.length != null) {
        res.status(200).json(comment);
      } else {
        res.status(404).send("Not found");
      }
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
    .then(([result]) => {
      res.json(result.insertId);
    })
    .then(() => {
      let firstPromise = new Promise((resolve, reject) => {
        resolve("OK");
        reject(new Error("something bad happened about firstPromise"));
      });
      tags.map((tag) => {
        firstPromise = firstPromise.then(() => {
          return neuron.query(`INSERT IGNORE INTO tags (tag) VALUES (?)`, [
            tag,
          ]);
        });
      });
    })
    .then(() => {
      let secondPromise = new Promise((resolve, reject) => {
        resolve("OK");
        reject(new Error("something bad happened about secondPromise"));
      });
      tags.map((tag) => {
        secondPromise = secondPromise.then(() => {
          return neuron.query(
            `INSERT INTO topics_has_tags (topics_id, tags_id) VALUES ((SELECT id FROM topics WHERE title=? LIMIT 1), (SELECT id FROM tags WHERE tag=? LIMIT 1))`,
            [title, tag]
          );
        });
      });
    })
    .then(() => {
      res.status(200).json();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the topic");
    });
};

const createComment = (req, res) => {
  const { commentContent, date, topicId, userID } = req.body;

  neuron
    .query(
      "INSERT INTO comments (comment, date_comment, topics_id, users_id) values (?, ?, ?, ?)",
      [commentContent, date, topicId, userID]
    )
    .then(() => res.status(200).json("commentaire créé"))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the comment");
    });
};

const updateComment = (req, res) => {
  const { id, commentContent } = req.body;
  console.warn(req.body);

  neuron
    .query(`UPDATE comments SET comment=? WHERE id=?`, [commentContent, id])
    .then(() => res.status(200).json())
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error updating the comment");
    });
};

module.exports = {
  getTagsTop,
  getCategories,
  getTopics,
  getTopicById,
  getTopicByTags,
  getComments,
  getTopicsByTitle,
  createTopic,
  createComment,
  updateComment,
};
