const { combineEpics } = require('redux-observable')

const addSubscriptionEpic = require('./addSubscriptionEpic')

const subscriptionsEpic = (
	combineEpics(
		addSubscriptionEpic,
	)
)

module.exports = {
	subscriptionsEpic,
}
