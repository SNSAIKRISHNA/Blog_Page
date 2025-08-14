const { validateToken } = require("../utils/auth");

exports.checkForToken = function (req, res, next) {
  const token = req.cookies["token"];

  if (!token) {
    return next(); // ✅ Add return here
  }

  try {
    const userPayload = validateToken(token);
    req.user = userPayload;
    return next();
  } catch (error) {
    return next();
  }
};

exports.onlyGrantAccessTo = function (role) {
  return function (req, res, next) {
    const token = req.cookies["token"];
    if (!token) {
      return res.redirect("/");
    }

    try {
      const userPayload = validateToken(token);
      if (userPayload.role === role) {
        req.user = userPayload;
        return next();
      } else {
        res.redirect("/");
      }
    } catch (error) {
      res.redirect("/");
    }
  };
};


exports.ensureAuthicated = function(req,res,next){
  if(!req.user) return res.redirect('/login');
  return next();
}