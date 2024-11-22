import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // Provides additional matchers for better assertions
import AddTodoItem from "./AddTodoItem"; // Adjust the path if necessary

describe("AddTodoItem Component", () => {
  it("calls onAdd with the correct title and body when the form is submitted", () => {
    // Mock the onAdd function
    const mockOnAdd = jest.fn();

    // Render the AddTodoItem component
    render(<AddTodoItem onAdd={mockOnAdd} />);

    // Select the input fields and button
    const titleInput = screen.getByLabelText(/title:/i);
    const bodyInput = screen.getByLabelText(/body:/i);
    const addButton = screen.getByText(/add todo/i);

    // Simulate user entering a title and body
    fireEvent.change(titleInput, { target: { value: "Test Title" } });
    fireEvent.change(bodyInput, { target: { value: "Test Body" } });

    // Simulate form submission (clicking the button)
    fireEvent.click(addButton);

    // Assertions
    expect(mockOnAdd).toHaveBeenCalledTimes(1); // Check if the onAdd function was called once
    expect(mockOnAdd).toHaveBeenCalledWith("Test Title", "Test Body"); // Check if onAdd was called with the correct arguments

    expect(titleInput.value).toBe(""); // Ensure the title input is cleared
    expect(bodyInput.value).toBe(""); // Ensure the body input is cleared
  });
});
