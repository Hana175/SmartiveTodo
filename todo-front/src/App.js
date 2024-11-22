import React, { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import AddTodoItem from "./components/AddTodoItem";
import axios from "axios";
//const axios = require("axios").default;

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:5001/todos");
        setTodos(response.data.todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  // Add a new todo
  const addTodo = async (title, body) => {
    try {
      const response = await axios.post("http://localhost:5001/todos", {
        title,
        body,
      });

      const newTodo = response.data;
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    } catch (error) {
      console.error("Error adding the todo:", error);
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting the todo:", error);
    }
  };

  // Edit a todo
  const editTodo = async (id, title, body) => {
    console.log("Editing todo with data:", { id, title, body }); // Log parameters
    try {
      const response = await axios.put(`http://localhost:5001/todos/${id}`, {
        title,
        body,
      });
      console.log("Backend response:", response.data);

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id
            ? { ...todo, title: response.data.title, body: response.data.body }
            : todo
        )
      );
    } catch (error) {
      console.error("Error editing the todo:", error);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>To-Do List</h1>
      <AddTodoItem onAdd={addTodo} />
      <div className="todo-container">
        {todos.map((todo) => {
          console.log("Rendering TodoItem with props:", todo);
          return (
            <TodoItem
              key={todo.id}
              title={todo.title}
              body={todo.body}
              onDelete={() => deleteTodo(todo.id)}
              onEdit={(title, body) => editTodo(todo.id, title, body)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
