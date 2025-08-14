const express = require('express');
const router = express.Router();
const {handleUserLogin, handleUserSignUp, renderUserBlog} = require('../controllers/userController');
const {ensureAuthicated} = require('../middlewares/auth')
const { route } = require('./blogRoutes');

router.get('/logout', (req, res) => {
  return res.clearCookie('token').redirect('/')
});
router.get('/blogs',ensureAuthicated, renderUserBlog )
router.post('/login', handleUserLogin);
router.post('/signup', handleUserSignUp);

module.exports = router;