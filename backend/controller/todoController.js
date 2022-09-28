const asyncHandler = require("express-async-handler");

const getTodo = asyncHandler(async (req, res) => {
  res.send({ message: "Get Todos" });
});

const setTodo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text");
  }

  res.send({ message: "Set todo" });
});

const updateTodo = asyncHandler(async (req, res) => {
  res.send({ message: `Update Todo ${req.params.id}` });
});

const deleteTodo = asyncHandler(async (req, res) => {
  res.send({ message: `Delete Todo ${req.params.id}` });
});

module.exports = { getTodo, setTodo, updateTodo, deleteTodo };
