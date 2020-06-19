const express = require('express')
const router = express.Router()

const Auth = require('../controllers/Auth')

router.post('/', Auth.signIn)

router.post('/register', Auth.registerUser)

module.exports = router;