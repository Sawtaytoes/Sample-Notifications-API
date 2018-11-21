const { catchError } = require('rxjs/operators')
const { NEVER, of } = require('rxjs')

const logError = require('$redux/utils/logError')

const catchEpicError = (
	errorActionCreator,
) => (
	catchError(error => {
		logError(error)

		return (
			NEVER
			|| (
				of(
					errorActionCreator(
						error,
					)
				)
			)
		)
	})
)

module.exports = catchEpicError
