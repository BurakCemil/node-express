import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		lowercase: true,
		required: true,
		trim: true
	},
	username: {
		type: String,
		required: true,
		trim: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

const User = mongoose.model("User", userSchema)

export default User
