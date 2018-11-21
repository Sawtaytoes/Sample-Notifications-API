const { map } = require('rxjs/operators')
const { ofType } = require('redux-observable')

const { sendResponse } = require('$redux/httpServers/actions')
const { ADD_SUBSCRIPTION } = require('./actions')

const addSubscriptionEpic = (
	action$,
) => (
	action$
	.pipe(
		ofType(ADD_SUBSCRIPTION),
		map(sendResponse),
	)
)

module.exports = addSubscriptionEpic
