import React, { useState, useEffect } from "react";
import "./TodoItem.css";

const TodoItem = ({ id, title, body, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newBody, setNewBody] = useState(body);

  useEffect(() => {
    setNewTitle(title); 
    setNewBody(body);
  }, [title, body]);

  // Enter edit mode
  const handleEdit = () => {
    setNewTitle(title);
    setNewBody(body);
    setIsEditing(true);
  };

  // Save changes
  const handleSave = () => {
    console.log("Saving with:", { id, newTitle, newBody }); 
    onEdit(newTitle, newBody);
    setIsEditing(false);
  };

  return (
    <div className="todo-container">
      <div className="todo-card">
        {isEditing ? (
          <>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => {
                console.log("Updating title:", e.target.value);
                setNewTitle(e.target.value);
              }}
              className="todo-title-input"
            />
            <textarea
              value={newBody}
              onChange={(e) => {
                console.log("Updating body:", e.target.value);
                setNewBody(e.target.value);
              }}
              className="todo-body-input"
            />

            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
          </>
        ) : (
          <>
            <h2 className="todo-title">{title}</h2>
            <p className="todo-body">{body}</p>
            <button className="edit-btn" onClick={handleEdit}>
              Edit
            </button>
          </>
        )}
        <button className="delete-btn" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
