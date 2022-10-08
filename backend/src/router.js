const express = require("express");
// const { app } = require("./app");
const usersControllers = require("./controllers/usersControllers");
const topicsControllers = require("./controllers/topicsControllers");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./middlewares/auth");
const { validateUser } = require("./middlewares/validators");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

router.post("/users", validateUser, hashPassword, usersControllers.createUser);
router.post("/login", usersControllers.registerWithMail, verifyPassword);
router.get("/users", usersControllers.getUsers);
router.get("/categories", topicsControllers.getCategories);
router.get("/topics", topicsControllers.getTopics);
router.get("/topicsbytags", topicsControllers.getTopicsByTags);

router.use(verifyToken);
router.put(
  "/settings",
  usersControllers.registerWithMail,
  usersControllers.updateSettings
);
router.get("/user_settings", usersControllers.registerWithMail);
router.post("/topics", topicsControllers.createTopic);
router.post("/logout", usersControllers.logout);
// Faire ta route settings

module.exports = router;
