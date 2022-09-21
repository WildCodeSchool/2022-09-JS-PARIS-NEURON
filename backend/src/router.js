const express = require("express");
// const { app } = require("./app");
const usersControllers = require("./controllers/usersControllers");
const topicsControllers = require("./controllers/topicsControllers");
const { hashPassword, verifyPassword } = require("./middlewares/auth");
const { validateUser } = require("./middlewares/validators");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

router.get("/users", usersControllers.getUsers);
router.post("/users", validateUser, hashPassword, usersControllers.createUser);
router.get("/categories", topicsControllers.getCategories);
router.post(
  "/login",
  usersControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// app.use(verifyToken);

module.exports = router;
