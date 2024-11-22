import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddTodoItem from "./AddTodoItem";
import axios from "axios";

// Mock axios
jest.mock("axios");

describe("AddTodoItem Component", () => {
  it("calls onAdd with the correct title and body when the form is submitted", async () => {
    // Mock the POST request
    axios.post.mockResolvedValue({
      data: { id: 1, title: "Test Title", body: "Test Body" },
    });

    const mockOnAdd = jest.fn();

    render(<AddTodoItem onAdd={mockOnAdd} />);

    const titleInput = screen.getByLabelText(/title:/i);
    const bodyInput = screen.getByLabelText(/body:/i);
    const addButton = screen.getByText(/add todo/i);

    // simulating user typing in the inputs
    fireEvent.change(titleInput, { target: { value: "Test Title" } });
    fireEvent.change(bodyInput, { target: { value: "Test Body" } });

    // Check that the inputs have the expected values before form submission
    expect(titleInput.value).toBe("Test Title");
    expect(bodyInput.value).toBe("Test Body");

    fireEvent.click(addButton);

    // Wait for axios.post to be called
    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));

    // axios.post was called with URL and data
    expect(axios.post).toHaveBeenCalledWith("http://localhost:5000/todos", {
      title: "Test Title",
      body: "Test Body",
    });

    // mock onAdd function called  correct parameters
    expect(mockOnAdd).toHaveBeenCalledWith("Test Title", "Test Body");

    //  inputs are cleared after submitting
    expect(titleInput.value).toBe("");
    expect(bodyInput.value).toBe("");
  });
});
