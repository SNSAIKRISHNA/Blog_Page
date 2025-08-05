exports.renderHomePage = (req, res) => {
       
    return res.render("home",{user: req.user});
 
};
exports.renderLoginPage = (req, res) => {
    if(req.user) 
     return res.redirect("/");
    return res.render("login");
};
exports.renderSignupPage = (req, res) => {
    if(req.user) 
    return res.redirect("/");
    return res.render("signup");
};