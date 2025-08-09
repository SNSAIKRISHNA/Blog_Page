const Blog = require('../models/blog')
exports.renderCreateBlogPage = function (req, res) {
     res.render("createBlog",{
        user: req.user,
    });
}

exports.createNewBlogPage = async function(req, res){
      const {title,content} = req.body 

 try {
    if(!title || !content) throw new Error('ALL FILES ARE MANDITORY')
      const blog = await Blog.create({
        content,
        title,
        coverImage: req.file.filename,
        createdBy: req.user._id 
    });
    return res.render("createBlog",{message:'Blog Created successfully'});
 } catch (error) {
    res.render('createBlog', {
        error
    })
 }
};