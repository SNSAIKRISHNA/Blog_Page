const express = require('express');
const router = express.Router();
const {handleUserLogin, handleUserSignUp, renderUserBlog} = require('../controllers/userController');
const { route } = require('./blogRoutes');

router.get('/logout', (req, res) => {
  return res.clearCookie('token').redirect('/')
});
router.get('/blogs', renderUserBlog )
router.post('/login', handleUserLogin);
router.post('/signup', handleUserSignUp);

module.exports = router;