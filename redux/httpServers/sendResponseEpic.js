const { ignoreElements, tap } = require('rxjs/operators')
const { ofType } = require('redux-observable')

const logMessage = require('./utils/logMessage')
const { SEND_RESPONSE } = require('./actions')

const sendResponseEpic = (
	action$,
) => (
	action$
	.pipe(
		ofType(SEND_RESPONSE),
		logMessage('Outgoing'),
		tap(({
			errorMessage,
			message,
			response,
		}) => (
			errorMessage
			? (
				response
				.status(400)
				.send(errorMessage)
			)
			: (
				response
				.send(message)
			)
		)),
		ignoreElements(),
	)
)

module.exports = sendResponseEpic
