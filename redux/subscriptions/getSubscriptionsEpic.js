const { map } = require('rxjs/operators')
const { ofType } = require('redux-observable')

const { GET_SUBSCRIPTIONS } = require('./actions')
const { sendResponse } = require('$redux/httpServers/actions')

const hardcodedSubscriptionTypes = [{
	id: '1',
	name: 'New Comment',
}, {
	id: '2',
	name: 'Campaign Status Changed',
}, {
	id: '3',
	name: 'New Report Available',
}]

const getSubscriptionsEpic = (
	action$,
) => (
	action$
	.pipe(
		ofType(GET_SUBSCRIPTIONS),
		map(({
			response,
		}) => ({
			message: hardcodedSubscriptionTypes,
			response,
		})),
		map(sendResponse),
	)
)

module.exports = getSubscriptionsEpic
