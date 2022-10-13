const express = require("express");
// const { app } = require("./app");
const usersControllers = require("./controllers/usersControllers");
const topicsControllers = require("./controllers/topicsControllers");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./middlewares/auth");
const {
  validateUser,
  validateUserSettings,
} = require("./middlewares/validators");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

router.post("/users", validateUser, hashPassword, usersControllers.createUser);
router.post("/login", usersControllers.registerWithMail, verifyPassword);
router.get("/tagstop", topicsControllers.getTagsTop);
router.get("/users", usersControllers.getUsers);
router.get("/categories", topicsControllers.getCategories);
router.get("/topics", topicsControllers.getTopics);
router.get("/topicsbytitle", topicsControllers.getTopicsByTitle);
router.get("/comments", topicsControllers.getComments);
router.get("/topicbyid", topicsControllers.getTopicById);

router.use(verifyToken);

router.get("/neuron", usersControllers.getNeuronById);
router.put(
  "/settings",
  usersControllers.registerWithMail,
  usersControllers.updateSettings
);
router.get(
  "/user_settings",
  validateUserSettings,
  usersControllers.registerWithMail
);
router.get("/followed", usersControllers.getFollowed);
router.get("/followedByIds", usersControllers.getUserByFollowed);
router.post("/followed", usersControllers.addToFollowed);
router.delete("/followed", usersControllers.removeFromFollowed);
router.post("/topics", topicsControllers.createTopic);
router.post("/comments", topicsControllers.createComment);
router.put("/comments", topicsControllers.updateComment);
router.post("/privatemessage", usersControllers.postPrivateMessage);
router.get("/privatemessages", usersControllers.getPrivateMessages);
router.delete("/privatemessages", usersControllers.deletePrivateMessage);
router.post("/logout", usersControllers.logout);

// Faire ta route settings

module.exports = router;
