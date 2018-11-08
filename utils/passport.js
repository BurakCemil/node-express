import passport from "passport"
import jwt from "jsonwebtoken"
import { Strategy as BearerStrategy } from "passport-http-bearer"
import User from "../models/User"

passport.use(
  new BearerStrategy((token, cb) => {
	jwt.verify(token, "secret", (err, decoded) => {
		if (err) return cb(err)
		User.findById(decoded.id, (err, user) => {
			if (err) { return cb(err) }
			cb(null, user)
		})
	})
})
)

export default passport
