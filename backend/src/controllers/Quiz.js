const Quiz = require('../models/Quiz')
const Question = require('../models/Question')
const User = require('../models/User')

class QuizController {
	async create(req, res) {
		try {
			const {general, questions } = req.body
			
			const user = await User.findById(req.userId);

			general.owner = user;
			general.number = Math.floor(Math.random() * 2000)

			const quiz = await Quiz.create(general);

			const questionList = []
			await Promise.all(
				questions.map(async element => {
					element.quiz = quiz
					const question = await Question.create(element)
					questionList.push(question)
				})
			)

			quiz.questions = questionList
			await quiz.save()

			return res.json(quiz)
        } catch (error) {
            return res.json(error)
        }
	}

	async getQuizes(req, res) {
		const quizes = await Quiz.find()

		return res.json(quizes)
	}

	async get(req, res) {
		const number = req.query.number
		const quiz = await Quiz.findOne({number}).populate('questions')

		quiz.questions.map(question => {
			const answers = question.answers
			
			question.correct = answers[0]

			for(let i = answers.length - 1; i > 0; i--){
				const j = Math.floor(Math.random() * i)
				const temp = answers[i]
				answers[i] = answers[j]
				answers[j] = temp
			}

			return question
		})

		quiz.questions.push({title: 'You have finished this quiz', questions: []})

		return res.json(quiz)
	}
}

module.exports = new QuizController();