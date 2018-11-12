import dotenv from "dotenv"
import convict from "convict"
import { logger } from "./log"

const result = dotenv.config()

if (result.error) {
	logger.error(`Error loading env configuration: ${result.error}`)
}

const config = convict({
	accountSid: {
		default: undefined,
		env: "ACCOUNT_SID",
		format: String
	},
	authToken: {
		default: undefined,
		env: "AUTH_TOKEN",
		format: String
	},
	appSid: {
		default: undefined,
		env: "APP_SID",
		format: String
	},
	logLevel: {
		default: undefined,
		env: "LOG_LEVEL",
		format: String
	},
})

config.validate({
	allowed: "strict"
})

export default config.getProperties()