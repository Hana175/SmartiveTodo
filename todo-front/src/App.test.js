import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import axios from "axios";

// Mock axios
jest.mock("axios");

// Test for rendering the Todo list or Add Todo component
test("renders Todo list and Add Todo component", async () => {
  // Mock the GET request
  axios.get.mockResolvedValue({
    data: { todos: [{ id: 1, title: "Test Todo", body: "Test Body" }] },
  });

  render(<App />);

  // Wait for the todos to be fetched and rendered
  await screen.findByText("Test Todo");

  // Check if the Todo list is rendered
  const todoTitle = screen.getByText("Test Todo");
  expect(todoTitle).toBeInTheDocument();

  // Check if the Add Todo form is rendered
  const addTodoForm = screen.getByText(/Add a New Todo/i);
  expect(addTodoForm).toBeInTheDocument();
});
