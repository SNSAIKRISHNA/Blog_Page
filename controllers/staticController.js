exports.renderHomePage = (req, res) => {
    return res.render("home");
};
exports.renderLoginPage = (req, res) => {
    if(req.cookies['token']) 
     return res.redirect("/");
    return res.render("login");
};
exports.renderSignupPage = (req, res) => {
    return res.render("signup");
};