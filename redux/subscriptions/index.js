const { combineEpics } = require('redux-observable')

const addSubscriptionEpic = require('./addSubscriptionEpic')
const getSubscriptionsEpic = require('./getSubscriptionsEpic')

const subscriptionsEpic = (
	combineEpics(
		addSubscriptionEpic,
		getSubscriptionsEpic,
	)
)

module.exports = {
	subscriptionsEpic,
}
