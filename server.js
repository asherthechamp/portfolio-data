const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const skillsRouter = require("./router/skills");
const workHisRouter = require("./router/workhistory");
const projectsRouter = require("./router/projects");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/skills", skillsRouter);
app.use("/workhistory", workHisRouter);
app.use("/projects", projectsRouter);

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected Successfully.");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
