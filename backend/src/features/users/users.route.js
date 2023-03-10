const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const express = require("express");
const User = require("./users.model");

const app = express.Router();

// Signup

app.post("/signup", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().min(3).max(200).required(), //changed
    password: Joi.string().min(6).max(200).required(),
    role: Joi.string(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  }
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send("User already exists");
    }
    user = await User(req.body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      secretKey
    );
    res.send(token);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Login

app.post("/login", async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().email().min(3).max(200).required(), //changed
    password: Joi.string().min(6).max(200).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send("Invalid email or password");
    }
    const validPass = await bcrypt.compare(req.body.password, user.password);
    console.log(validPass);
    if (!validPass) {
      return res.status(400).send("Invalid email or password");
    }
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email, role: user.role },
      secretKey
    );
    res.send(token);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = app;
