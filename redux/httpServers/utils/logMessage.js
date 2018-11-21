const chalk = require('chalk')
const { tap } = require('rxjs/operators')

const logMessage = prefix => (
	tap(({ message }) => {
		console.info(
			(
				chalk
				.magentaBright
				.bgMagenta
				.bold(`[${prefix} Message]`)
			),
			message,
		)
	})
)

module.exports = logMessage
