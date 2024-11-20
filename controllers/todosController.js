let todos = [];

const getTodos = (req, res) => {
  res.json({ message: `GET all todos:`, todos });
};

const getTodo = (req, res) => {
  const id = parseInt(req.params.id); // Convert the id to a number
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    return res.status(404).json({ message: `Todo with id ${id} not found` });
  }
  console.log(todo);
  res.json({ message: `Todo with id ${id}`, todo });
};

const createTodo = (req, res) => {
  console.log("Request Body:", req.body); // Log the request body

  const { title, body } = req.body;

  //   if (!title || !body) {
  //     return res.status(400).json({ message: "Please provide title and body" });
  //   }

  const newTodo = {
    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
    title,
    body,
  };

  todos.push(newTodo);

  res.status(201).json({
    message: `New todo with id ${newTodo.id} and title ${newTodo.title} has been created.`,
  });
};

const deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    res.status(400).json({ message: `Todo with id ${id} not found` });
  }
  todos.splice(index, 1);
  res
    .status(200)
    .json({ message: `Todo item with id ${id} has been deleted.` });
};

const updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;

  const todo = todos.find((t) => t.id === parseInt(id));

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  if (title) todo.title = title;
  if (body) todo.body = body;

  res.json(todo);
};

module.exports = { getTodos, createTodo, getTodo, deleteTodo, updateTodo };
