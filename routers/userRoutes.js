const express = require('express');
const router = express.Router();
const {handleUserLogin, handleUserSignUp} = require('../controllers/userController')

router.get('/:id', (req, res) => {
    res.render('home');
});

router.post('/login', handleUserLogin);
router.post('/signup', handleUserSignUp);

module.exports = router;