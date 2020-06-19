const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const Quiz = require('./controllers/Quiz')

const AuthRoutes = require('./routes/Auth')
const LoggedRoutes = require('./routes/Logged')

//Connect DB
mongoose.connect('mongodb+srv://database:password@cluster0-w5m1v.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

var corsOptions = {
	origin: '*',
	methods: "GET,HEAD,PUT,POST,DELETE",
	allowedHeaders: ['Content-Type', 'Authorization'],
	optionsSuccessStatus: 204
}

app.use(cors(corsOptions))

app.use(express.json())

app.use('/auth', AuthRoutes)
app.use('/l', LoggedRoutes)
app.get('/quiz', Quiz.get)
app.get('/quiz/all', Quiz.getQuizes)

//Start Server
app.listen(process.env.PORT || 3001)