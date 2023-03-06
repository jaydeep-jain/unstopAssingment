const express = require('express');
const router = express.Router();
const UserController=require('../controller/userController.js')



router.get('/test-me', function (req, res) {
    console.log('My batch is', req.name)
    res.send('My second ever api!')
});


router.post('/register',UserController.registerUser)



module.exports = router

