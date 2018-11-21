const chalk = require('chalk')

const logError = (
	error,
) => (
	console
	.error(
		(
			chalk
			.red(
				error
				.name,
			)
		),
		(
			chalk
			.redBright(
				error
				.message,
			)
		),
	)
)

module.exports = logError
