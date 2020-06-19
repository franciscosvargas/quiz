const User = require('../models/User')
const jwt = require('jsonwebtoken')

class Auth {

	signIn = async (req, res) => {

		const { username, password } = req.body
		const user = await User.findOne({ username })

		if (!user) return res.send({ error: 'User not found.' })

		if (password !== user.password)
			return res.send({ error: 'Password wrong.' })

		user.password = undefined

		const token = jwt.sign({ id: user._id }, 'I4SP', {
			expiresIn: 86400
		})

		res.send({ user, token })
	}

	registerUser = async (req, res) => {
		try {
			await this.userNotExists(req.body.username)

			const user = await User.create(req.body)

			user.password = undefined

			const token = jwt.sign({ id: user._id }, 'I4SP', {
				expiresIn: 86400
			})

			return res.json({ user, token })
		} catch (error) {
			return res.json({error})
		}
	}


	userNotExists = async (username) => {
		const user = await User.findOne({ username })
		if (user) {
			return Promise.reject('This username alredy taken.')
		}
		return true
	}

}

module.exports = new Auth()