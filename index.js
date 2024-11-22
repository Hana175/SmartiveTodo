const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use("/todos", require("./routes/todosRoute"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
