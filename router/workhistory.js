const express = require("express");
const WorkHistory = require("../model/workhistory.model");

const router = express.Router();

router.get("/", (req, res) => {
  WorkHistory.find()
    .then((whs) => res.json(whs))
    .catch((err) => res.status("400").json(`Error: ${err}`));
});

router.post("/", (req, res) => {
  const workhistory = new WorkHistory(req.body)
    .then((workhistory) => res.json(workhistory))
    .catch((err) => res.status("400").json(`Error: ${err}`));
});

router.put("/:id", (req, res) => {
  const workhistory = WorkHistory.findById(req.params.id);
  workhistory = WorkHistory(req.body);
  workhistory
    .save()
    .then((workhistory) => res.json(workhistory))
    .catch((err) => res.status("400").json("Error: ${err}"));
});

router.delete("/:id", (req, res) => {
  WorkHistory.findByIdAndDelete(req.params.id)
    .then((workhistory) => res.json(workhistory))
    .catch((err) => res.status("400").json(`Error: ${err}`));
});

module.exports = router;
