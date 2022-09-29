const asyncHandler = require("express-async-handler");
const todosModel = require("../models/todosModel");

const Todo = require("../models/todosModel");

const getTodo = asyncHandler(async (req, res) => {
  const todos = await Todo.find();

  res.send(todos);
});

const setTodo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text");
  }

  const todos = await Todo.create({
    text: req.body.text,
  });

  res.send(todos);
});

const updateTodo = asyncHandler(async (req, res) => {
  const todos = await Todo.findById(req.params.id);

  if (!todos) {
    res.status(400);
    throw new Error("Todo not found");
  }

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.send(updatedTodo);
});

const deleteTodo = asyncHandler(async (req, res) => {
  const todos = await Todo.findById(req.params.id);

  if (!todos) {
    res.status(400);
    throw new Error("Todo not found");
  }

  await todos.remove();

  res.send({ id: req.params.id });
});

module.exports = { getTodo, setTodo, updateTodo, deleteTodo };
