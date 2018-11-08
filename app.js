import express from "express"
import cors from "cors"
import passport from "./utils/passport"
// import db from "./utils/db"
import userRoute from "./routes/user"

import config from "./utils/config"
import { logger } from "./utils/log"


const app = express()

// adding 3rd party middleware
app.use(passport.initialize()) // passport is used for authentication
app.use(cors()) // currently CORS is enabled for all requests

// adding the app routes
app.use("/user", userRoute)

app.listen(3000, () => {
	console.log("Launching node-express on port 3000...")
})
