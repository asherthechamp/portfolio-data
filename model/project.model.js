const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tools: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model("Project", projectsSchema);
module.exports = Project;
