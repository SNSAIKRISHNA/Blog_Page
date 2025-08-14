const express = require('express');
const router = express.Router();
const multer = require('multer');
const Blog = require('../models/blog');


const {createNewBlogPage, renderCreateBlogPage, renderBlogPost,handleDeleteBlog} = require('../controllers/blogController')
const {onlyGrantAccessTo,ensureAuthicated} = require('../middlewares/auth')

 const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null,`${req.user._id}-${file.originalname}`); 
    }
});

const upload = multer({ storage });

router.get("/create", ensureAuthicated, renderCreateBlogPage);
router.get("/view/:id", renderBlogPost);
router.get('/delete/:id',onlyGrantAccessTo('Admin'), handleDeleteBlog);


router.post("/create", ensureAuthicated,upload.single("coverImage"), createNewBlogPage);

module.exports = router;