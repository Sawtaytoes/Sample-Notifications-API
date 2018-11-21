const { catchError } = require('rxjs/operators')
const { NEVER } = require('rxjs')

const logError = require('$redux/utils/logError')

const catchEpicError = () => (
	catchError(error => {
		logError(error)

		return NEVER
	})
)

module.exports = catchEpicError
