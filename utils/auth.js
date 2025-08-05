const jwt = require("jsonwebtoken");
const User = require("../models/user");

const JWT_SECRET = "$sai@007"

async function genrateTokenForUser(id) {
  const user = await User.findById(id);
  const payload = {
    _id: user._id,
    email: user.email,
    fullName: user.fullName,
  };
  const token = jwt.sign(payload,JWT_SECRET);
  return token;
}

function validateToken(token){
  return jwt.verify(token,JWT_SECRET)
}


module.exports = {
  genrateTokenForUser,
  validateToken,
};
