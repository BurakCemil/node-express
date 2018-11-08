import { createLogger, format, transports } from "winston"
import { logLevel } from "./config"

// const isTest = config.NODE_ENV === NodeEnvironment.Test;
const customFormat = format.printf((info) => {
	const now = new Date()
	const timestamp = now.toISOString()
	const meta = {
		...info,
	}

	delete meta.level
	delete meta.message

	const isMetaFilled = Object.keys(meta).length > 0
	const combinedMessage = `[${timestamp}][${info.level}] ${info.message}`

	if (isMetaFilled) {
		const metaAsJson = JSON.stringify(meta)

		return `${combinedMessage} ${metaAsJson}`
	}

	return combinedMessage
})

/**
 * The application's main logger, which will log to the console and to the file "parking-finder.log".
 */
export const logger = createLogger({
	level: logLevel,
	silent: false,
	transports: [
		new transports.Console({
			format: format.combine(
        format.colorize(),
        customFormat,
      ),
		}),
		new transports.File({
			filename: "live-translation.log",
			format: customFormat,
		}),
	],
})
