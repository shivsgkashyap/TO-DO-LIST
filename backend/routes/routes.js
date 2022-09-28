const express = require("express");
const router = express.Router();
const {
  getTodo,
  setTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todoController");

router.get("/", getTodo);

router.post("/", setTodo);

router.put("/", updateTodo);

router.delete("/", deleteTodo);

module.exports = router;
