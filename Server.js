const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config();

const cors = require("cors");

const routes = require("./routes/ToDoRoutes");

const app = express();

const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Error: " + err));

app.use(routes);

app.listen(PORT, () => console.log("Server started on port " + PORT));
