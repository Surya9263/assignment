const express = require("express");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

const userRoute = require("./src/features/users/users.route");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user", userRoute);

app.get("/", (req, res) => res.send("hello"));

app.listen(8080, () => {
  console.log("server started on port 8080");
});
