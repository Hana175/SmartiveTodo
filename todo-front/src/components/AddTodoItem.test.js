import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddTodoItem from "./AddTodoItem"; 

describe("AddTodoItem Component", () => {
  it("calls onAdd with the correct title and body when the form is submitted", () => {
    
    const mockOnAdd = jest.fn();

    
    render(<AddTodoItem onAdd={mockOnAdd} />);

    const titleInput = screen.getByLabelText(/title:/i);
    const bodyInput = screen.getByLabelText(/body:/i);
    const addButton = screen.getByText(/add todo/i);

    
    fireEvent.change(titleInput, { target: { value: "Test Title" } });
    fireEvent.change(bodyInput, { target: { value: "Test Body" } });
    fireEvent.click(addButton);

    expect(mockOnAdd).toHaveBeenCalledTimes(1); 
    expect(mockOnAdd).toHaveBeenCalledWith("Test Title", "Test Body"); 

    expect(titleInput.value).toBe(""); 
    expect(bodyInput.value).toBe("");
  });
});
