const mongoose = require('mongoose')

const Question = new mongoose.Schema(
    {
		title: { type: String, require: true },
		answers: { type: Array, require: true},
		correct: { type: String, default: 'a'},
		quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }
    }
)

module.exports = mongoose.model('Question', Question)