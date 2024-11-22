import React, { useState } from "react";
import "./TodoItem.css";

const AddTodoItem = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      onAdd(title, body);
      setTitle("");
      setBody("");
    } else {
      alert("Both title and body are required!");
    }
  };

  return (
    <div className="add-todo-item">
      <h2>Add a New Todo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter todo title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter todo description"
            required
          />
        </div>
        <button type="submit" className="add-btn">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodoItem;
