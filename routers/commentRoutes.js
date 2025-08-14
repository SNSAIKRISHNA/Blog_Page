const express = require('express');
const router = express.Router();
const {handleCreateComment} =  require('../controllers/commentContoller')
const {ensureAuthicated} = require('../middlewares/auth')


router.post('/create',ensureAuthicated, handleCreateComment)


module.exports = router;