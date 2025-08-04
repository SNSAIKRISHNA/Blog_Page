const jwt = require("jsonwebtoken");
const User = require("../models/user");
async function genrateTokenForUser(id) {
  const user = await User.findById(id);
  const payload = {
    _id: user._id,
    email: user.email,
    fullName: user.fullName,
  };
  const token = jwt.sign(payload, "$sai");
  return token;
}

module.exports = {
  genrateTokenForUser,
};
