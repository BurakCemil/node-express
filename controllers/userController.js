import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/User"
// import auth from "../utils/auth"


export const register = (req, res) => {
	console.log(req.body)
	const hashedPassword = bcrypt.hashSync(req.body.password, 8)
	User.create({
		fullName : req.body.fullName,
		email : req.body.email,
		username: req.body.username,
		password : hashedPassword
	})
    .then(user => {
	return res.status(200).send({ user: user })
})
    .catch(err => {
	console.log(err)
	return res.status(500).send("There was a problem registering the user.")
})
}

export const authUser = async (req, res) => {
	try {
		const user = await User.findOne({ "username": req.body.username }, "_id username fullName email password createdAt")
		// const unhashedPassword = await auth.unhashPassword(req.body.password, user.password)
		const token = await jwt.sign({ id: user._id }, "secret", {
			expiresIn: 86400 // expires in 24 hours
		})
		const userResponse = {
			_id: user._id,
			username: user.username,
			fullName: user.fullName,
			email: user.email,
			createdAt: user.createdAt
		}
		return res.status(200).send({ user: userResponse, token: token })
	} catch (e) {
		return res.status(500).send(e)
	}
}

export const test = (req, res) => {
	return res.status(200).send({ test: true })
}
