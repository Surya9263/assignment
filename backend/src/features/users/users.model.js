const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, minlength: 3, maxlength: 30, required: true },
  email: {
    type: String,
    minlength: 3,
    maxlength: 200,
    required: true,
    unique: true,
  },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  password: { type: String, minlength: 6, maxlength: 1024, required: true },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
