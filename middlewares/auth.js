const { validateToken } = require('../utils/auth');

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
 
exports.only