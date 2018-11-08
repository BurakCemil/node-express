import express from "express"
import bodyParser from "body-parser"
import passport from "passport"
import { register, authUser, test } from "../controllers/userController"

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post("/register", register)
router.post("/auth", authUser)
router.get("/test", /*passport.authenticate("bearer", { session: false }),*/ test)

export default router
