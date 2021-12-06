const express = require("express");
const Skill = require("../model/skill.model");

const router = express.Router();

router.get("/", (req, res) => {
  Skill.find()
    .then((skills) => res.json(skills))
    .catch((err) => res.status("400").json("Error: ${err}"));
});

router.post("/", (req, res) => {
  const skill = new Skill(req, body);
  skill
    .save()
    .then((skill) => res.json(skill))
    .catch((err) => res.status("400").json(`Error: ${err}`));
});

router.put("/:id", (req, res) => {
  const skill = Skill.findById(req.params.id);
  skill = Skill(req.body);
  skill
    .save()
    .then((skill) => res.json(skill))
    .catch((err) => res.status("400").json(`Error: ${err}`));
});

module.exports = router;
