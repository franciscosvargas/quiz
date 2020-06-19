const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const Quiz = require('../controllers/Quiz')
const Question = require('../controllers/Question')

router.use((req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader)
        res.send({ error: 'Nenhum token foi informado.' })

    const parts = authHeader.split(' ')

    if (!parts.length === 2)
        res.send({ error: 'Token com formato inválido' })

    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme))
        return res.send({ error: 'Token mal formatado.' })

    jwt.verify(token, 'I4SP', (err, decoded) => {
        if (err) return res.send({ error: 'Token inválido.' })

		req.userId = decoded.id

        return next()
    })
})

// Quiz
router.post('/quiz', Quiz.create)
router.get('/quiz', Quiz.getQuizes)

// Question
router.post('/question', Question.create)

module.exports = router;