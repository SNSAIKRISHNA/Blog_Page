const { genrateTokenForUser } = require("../utils/auth");
const User = require("../models/user");
const Blog = require('../models/blog');

exports.handleUserLogin = async function (req, res) {
  const { email, password } = req.body;
  try {
    if (!email || !password) throw new Error("email and password ");
    const user = await User.findOne({ email });

    if (!user) throw new Error(`User with ${email} does not exist`);

    if (user.password !== password) throw new Error(`Incorrect Password`);

    const token = await genrateTokenForUser(user._id);

    return res.cookie("token", token).redirect("/");
  } catch (error) {
    res.render("login", { error });
  }
};

exports.handleUserSignUp = async function (req, res) {
  const { fullName, email, password } = req.body;

  try {
    if (!fullName) throw new Error("FullName is Required");
    if (!email) throw new Error("email is Required");
    if (!password || password.length < 5)
      throw new Error(" password is requird andfd  min length is 5 characters");
    const user = await User.create({ fullName, email, password });
    const token = await genrateTokenForUser(user._id);
    return res.cookie("token", token).redirect("/");
  } catch (error) {
    res.render("signup", {
      error,
    });
  }
};

exports.renderUserBlog =  async(req,res) => {
  if(!req.user) return res.redirect('/login')
  const blogs = await Blog.find({createdBy: req.user._id})
 return res.render('userBlogs',{
   user: req.user,
   blogs,
   
 })
   
}