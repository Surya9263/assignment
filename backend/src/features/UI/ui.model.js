const mongoose = require("mongoose");

const uiSchema = new mongoose.Schema({
  adminId: { type: mongoose.Schema.Types.ObjectId },
  mainImg: { type: String },
  img1: { type: String },
  img2: { type: String },
  img3: { type: String },
  img4: { type: String },
  navTexts: { type: Array },
  text1: { type: String },
  text2: { type: String },
  text3: { type: String },
  text4: { type: String },
  instagram: { type: String, default: "https://www.instagram.com/" },
  facebook: { type: String, default: "https://www.facebook.com/" },
  linkedin: { type: String, default: "https://www.linkedin.com/" },
});

const UI = mongoose.model("ui", uiSchema);

module.exports = UI;
