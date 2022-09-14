const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const neuronControllers = require("./controllers/neuronControllers");

router.get("/users", neuronControllers.getUsers);
router.get("/categories", neuronControllers.getCategories);
router.post("/users", neuronControllers.createUser);

module.exports = router;
