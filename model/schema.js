const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  from: String,
  relationship: String,
});

module.exports = mongoose.model("schema", userSchema);
