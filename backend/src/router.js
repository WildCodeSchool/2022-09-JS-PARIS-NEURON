const express = require("express");
// const { app } = require("./app");
const neuronControllers = require("./controllers/neuronControllers");
const { hashPassword, verifyPassword } = require("./auth");
const { validateUser } = require("./validators");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

router.get("/users", neuronControllers.getUsers);
router.post("/users", validateUser, hashPassword, neuronControllers.createUser);
router.get("/categories", neuronControllers.getCategories);
router.post(
  "/login",
  neuronControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// app.use(verifyToken);

module.exports = router;
