import bcrypt from "bcryptjs"

const unhashPassword = async (password, hash) => {
	const unhashedPassword = await new Promise((resolve, reject) => {
		bcrypt.compare(password, hash, (err, res) => {
			if (err) reject(err)
			if (!res) reject("Wrong password.")
			if (res) resolve(true)
		})
	}).then(() => {
		return unhashedPassword
	})
}

export default unhashPassword
