const express = require('express');
const router = express.Router();
const {handleUserLogin, handleUserSignUp} = require('../controllers/userController')

router.get('/logout', (req, res) => {
  return res.clearCookie('token').redirect('/')
});

router.post('/login', handleUserLogin);
router.post('/signup', handleUserSignUp);

module.exports = router;