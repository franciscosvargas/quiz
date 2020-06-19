const Question = require('../models/Question')
const Quiz = require('../models/Quiz')

class QuizController {
	async create(req, res) {
		try {
			const data = req.body
			
			const user = await Quiz.findById(data.quiz);

            data.quiz = user;
            const question = await Question.create(data);

			res.json(question)
        } catch (error) {
            return res.json(error)
        }
	}
}

module.exports = new QuizController();