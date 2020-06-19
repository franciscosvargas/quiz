const mongoose = require('mongoose')

const Match = new mongoose.Schema(
    {
		quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Match' },
		user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		time : { type: Date, default: Date.now },
		complete: { type: Boolean, default: flase }
    }
)

module.exports = mongoose.model('Match', Match)