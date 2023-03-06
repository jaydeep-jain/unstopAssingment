const express = require('express');
const router = express.Router();
const UserController=require('../Controller/UserController.js')
const seatController=require('../Controller/seatController')


router.get('/test-me', function (req, res) {
    console.log('My batch is', req.name)
    res.send('My second ever api!')
});


router.post('/register',UserController.registerUser)

router.post('/seat',seatController.createSeat)

module.exports = router