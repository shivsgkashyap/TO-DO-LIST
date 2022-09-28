const getTodo = (req, res) => {
  res.send({ message: "Get Todos" });
};
const setTodo = (req, res) => {
  res.send({ message: "Set Todos" });
};
const updateTodo = (req, res) => {
  res.send({ message: `Update Todo ${req.params.id}` });
};
const deleteTodo = (req, res) => {
  res.send({ message: `Delete Todo ${req.params.id}` });
};

module.exports = { getTodo, setTodo, updateTodo, deleteTodo };
