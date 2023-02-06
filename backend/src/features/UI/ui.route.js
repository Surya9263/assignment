const express = require("express");
const Joi = require("joi");
const adminAuth = require("../../middleware/adminAuth");
const UI = require("./ui.model");

const app = express.Router();

app.post("/", adminAuth, async (req, res) => {
  const schema = Joi.object({
    mainImg: Joi.string(),
    navTexts: Joi.array().items(Joi.string()),
    instagram: Joi.string(),
    facebook: Joi.string(),
    linkedin: Joi.string(),
    adminId: Joi.string(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  }
});

module.exports = app;