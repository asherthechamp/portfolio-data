const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const worHisSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  duration: { type: String, required: true },
  workDes: {
    type: [],
    required: true,
  },
  exposer: {
    type: [],
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const WorkHistory = mongoose.model("WorkHistory", worHisSchema);
module.exports = WorkHistory;
