const express = require('express');
const {
    signupController,
    loginController,
    verifyController
} = require('../controllers/auth.controllers')
const { isAuthenticated } = require('../middlewares/jwt.middleware');


const { Router } = express; 

const router = Router();

router.post('/signup', signupController);

router.post('/login', loginController)

router.get('/verify', isAuthenticated, verifyController)

module.exports = router;