const express = require('express');
const router = express.Router();

router.post('/signin', (req, res, next) => {
    if (req.body.password === '1234') res.send({ 'success': true })
    else res.send({ 'success': false })
})

module.exports = router;