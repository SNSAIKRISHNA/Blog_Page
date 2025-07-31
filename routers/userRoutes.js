const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    res.render('home');
});

router.post('/login', function(req, res) {
    console.log(req.body);
    return res.end('ok');
});

module.exports = router;