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
			message,
			response,
		}) => (
			response
			.send(message)
		)),
		ignoreElements(),
	)
)

module.exports = sendResponseEpic
