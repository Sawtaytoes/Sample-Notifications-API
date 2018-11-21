const { combineEpics } = require('redux-observable')

const addSubscriptionEpic = require('./addSubscriptionEpic')
const deleteSubscriptionEpic = require('./deleteSubscriptionEpic')
const deleteSubscriptionsEpic = require('./deleteSubscriptionsEpic')
const getSubscriptionEpic = require('./getSubscriptionEpic')
const getSubscriptionsEpic = require('./getSubscriptionsEpic')

const subscriptionsEpic = (
	combineEpics(
		addSubscriptionEpic,
		deleteSubscriptionEpic,
		deleteSubscriptionsEpic,
		getSubscriptionEpic,
		getSubscriptionsEpic,
	)
)

module.exports = {
	subscriptionsEpic,
}
