const express = require("express");

const connect = require("./src/configs/db");

const app = express();

const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const userRoute = require("./src/features/users/users.route");
const uiRoute = require("./src/features/UI/ui.route");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/user", userRoute);
app.use("/ui", uiRoute);

app.get("/", (req, res) => res.send("hello"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  await connect();
  console.log("server started on port 8080");
});
