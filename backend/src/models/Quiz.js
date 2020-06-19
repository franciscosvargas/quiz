const mongoose = require('mongoose')


const Quiz = new mongoose.Schema(
    {
		title: { type: String, require: true },
		number: { type: Number, require: true },
		description: { type: String, require: true},
		questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question'}],
		owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }
    }
)

module.exports = mongoose.model('Quiz', Quiz)