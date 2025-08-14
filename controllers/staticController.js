const Blog = require('../models/blog')


exports.renderHomePage = async (req, res) => {
       const allBlog = await Blog.find({}).sort({creatredAt: -1});
    return res.render("home",{
        user: req.user,
        blogs: allBlog,
    });
 
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