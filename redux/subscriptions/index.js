const { combineEpics } = require('redux-observable')

const addSubscriptionEpic = require('./addSubscriptionEpic')
const getSubscriptionEpic = require('./getSubscriptionEpic')
const getSubscriptionsEpic = require('./getSubscriptionsEpic')

const subscriptionsEpic = (
	combineEpics(
		addSubscriptionEpic,
		getSubscriptionEpic,
		getSubscriptionsEpic,
	)
)

module.exports = {
	subscriptionsEpic,
}
