const Blog = require('../models/blog')
const Comment = require('../models/comments')


exports.renderCreateBlogPage = function (req, res) {
     res.render("createBlog",{
        user: req.user,
    });
};

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

exports.renderBlogPost = async function(req,res){
    try {
        const id =  req.params.id;
        await Blog.findByIdAndUpdate (id ,{$inc: {views: 1 }})
        const blog = await Blog.findById(id).populate('createdBy');
        const comments = await Comment.find({blogId: blog._id
        })
        return res.render('blog', {
            user: req.user,
            blog,
            comments
        })
    } catch (error) {
        res.render("home");
        
    }
};

exports.handleDeleteBlog = async function (req,res){
    
   
    await Blog.deleteOne({_id: req.params.id})
    return res.redirect("/");
};