const request = require("supertest");
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const todosRoute = require("../routes/todosRoute");
dotenv.config();
app.use(express.json());
app.use("/todos", todosRoute);

let todos = [
  { id: 1, title: "Task 1", body: "Body 1" },
  { id: 2, title: "Task 2", body: "Body 2" },
];

beforeEach(() => {
  todos = [
    { id: 1, title: "Task 1", body: "Body 1" },
    { id: 2, title: "Task 2", body: "Body 2" },
  ];
});

// Unit test for the GET /todos/:id endpoin
describe("GET /todos/:id", () => {
  it("should return 404 if todo not found", async () => {
    const response = await request(app).get("/todos/999"); // Invalid ID

    expect(response.status).toBe(404);

    expect(response.body.message).toBe("Todo with id 999 not found");
  });
});

// Unit test for the PUT /todos/:id endpoint
describe("PUT /todos/:id", () => {
  it("should return 404 if todo to update is not found", async () => {
    const updatedTodo = { title: "Updated Task 999", body: "Updated Body 999" };

    const response = await request(app).put("/todos/999").send(updatedTodo); // Invalid ID

    expect(response.status).toBe(404);

    expect(response.body.message).toBe("Todo not found");
  });
});

// Unit test for the DELETE /todos/:id endpoint
describe("DELETE /todos/:id", () => {
  it("should return 400 if todo to delete is not found", async () => {
    const response = await request(app).delete("/todos/999"); // Invalid ID

    expect(response.status).toBe(400);

    expect(response.body.message).toBe("Todo with id 999 not found");
  });
});
