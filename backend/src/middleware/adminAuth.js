const User = require("../features/users/users.model");
const adminAuth = async (req, res, next) => {
  let id = req.headers.id;
  try {
    if (!id) {
      return res.status(401).send("Not authorized..");
    }
    let user = await User.findById(id);
    if (user.role === "user") {
      return res.status(401).send("Not authorized..");
    }
    if (user.role === "admin") {
      next();
    }
  } catch (error) {
    res.status(400).send("Permission not allowed");
  }
};

module.exports = adminAuth;
