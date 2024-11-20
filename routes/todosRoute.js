const express = require("express");
const router = express.Router();
const {
  getTodo,
  createTodo,
  getTodos,
  deleteTodo,
  updateTodo,
} = require("../controllers/todosController");

//to get all todo items
//to get single todo item
//to create a todo item
//to update a todo item
//to delete a todo item

router.route("/").get(getTodos).post(createTodo);

router.route("/:id").get(getTodo).put(updateTodo).delete(deleteTodo);

module.exports = router;
