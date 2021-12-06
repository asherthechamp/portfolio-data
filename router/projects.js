const express = require("express");
const Project = require("../model/project.model");

const router = express.Router();

router.get("/", (req, res) => {
  Project.find()
    .then((projects) => res.json(projects))
    .catch((err) => res.status("400").json(`Error: ${err}`));
});

router.post("/", (req, res) => {
  const project = new Project(req.body);
  project
    .save()
    .then((project) => res.json(project))
    .catch((err) => res.status("400").json(`Error: ${err}`));
});

router.put("/:id", (req, res) => {
  const project = Project.findById(req.params.id);
  project = Project(req.body);
  project
    .save()
    .then((project) => res.json(project))
    .catch((err) => res.status("400").json(`Error: ${err}`));
});

router.delete("/:id", (req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then((project) => res.json(project))
    .catch((err) => res.status("400").json(`Error: ${err}`));
});

module.exports = router;
