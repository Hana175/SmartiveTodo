# Todo List Application

This is a todo list application with a frontend and backend. This is developed using NodeJS, ExpressJS, and ReactJS.

## Backend:

The features consist of:

1. Getting all todo items
2. Getting a specific todo item using its id
3. Creating a new todo item
4. Updating an existing todo item
5. Deleting a todo item

### Designing the backend:

The index uses express, body-parser for json data, and runs on port 5000 passed from the .env file. The application uses the routing directory (routes) using the Router from ExpressJS and chains the post and get all todo items, and chains the delete, put, and get by id.
The functionalities are implemented in the `todosController` file which are called in the router file.

The todo items are stored in an array (in-memory).

### Testing the backend:

1. Get specific todo item by id
2. Deleting a todo item
3. Updating a todo item.

## Frontend:

The features consist of:

1. Displaying the todo items
2. Adding a new todo item
3. Deleting a todo item
4. Editing/Updating a todo item.

### Designing the frontend:

The frontend consists of `App.js` and the 2 components `AddTodoItem.js` and `TodoItem.js`.  
`App.js` passes the functionalities implemented to axios which in turn communicates it with the backend.  
`TodoItem.js` implements the functionalities of the delete and edit of todo items.  
`AddTodoItem.js` implements the functionality of adding a new todo item.

Styling was made using CSS.

### Testing the frontend:

1. Testing the `AddTodoItem` functionality calling the `onAdd` function.

## Error handling in the backend controller functionalities.

---

## To run the program.

1. Clone the github repository using the following link:
   https://github.com/Hana175/SmartiveTodo

2. Install Dependencies for the Backend: Open the project in VSC and a terminal to run the command "npm install" to install the dependencies.

3. Navigate and Install Dependencies for the Frontend: In another terminal, navigate to the todo-front directory by running the command "cd todo-front" to access the frontend, run "npm install".

4. In the terminal where the backend directory TaskSmartive is active, run "npm start" to start the backend.

5. In the terminal where the frontend directory todo-front is active, run "npm start" to start the frontend.
