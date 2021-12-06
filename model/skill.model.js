const mongoose = require("mongoose");

Schema = mongoose.Schema;

const skillsSchema = new Schema({
  skill: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
});

const Skill = mongoose.model("Skill", skillsSchema);
module.exports = Skill;
