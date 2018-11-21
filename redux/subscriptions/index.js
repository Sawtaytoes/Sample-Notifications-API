const { combineEpics } = require('redux-observable')

const addUsersSubscriptionEpic = require('./addUsersSubscriptionEpic')
const deleteUsersSubscriptionEpic = require('./deleteUsersSubscriptionEpic')
const deleteUsersSubscriptionsEpic = require('./deleteUsersSubscriptionsEpic')
const getSubscriptionsEpic = require('./getSubscriptionsEpic')
const getUsersSubscriptionEpic = require('./getUsersSubscriptionEpic')
const getUsersSubscriptionsEpic = require('./getUsersSubscriptionsEpic')

const subscriptionsEpic = (
	combineEpics(
		addUsersSubscriptionEpic,
		deleteUsersSubscriptionEpic,
		deleteUsersSubscriptionsEpic,
		getSubscriptionsEpic,
		getUsersSubscriptionEpic,
		getUsersSubscriptionsEpic,
	)
)

module.exports = {
	subscriptionsEpic,
}
