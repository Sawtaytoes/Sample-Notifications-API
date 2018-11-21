const ADD_SUBSCRIPTION = 'SUBSCRIPTIONS::ADD_SUBSCRIPTION'

const addSubscription = ({
	request,
	response,
}) => ({
	request,
	response,
	type: ADD_SUBSCRIPTION,
})

module.exports = {
	ADD_SUBSCRIPTION,
	addSubscription,

	// getSubscription,
	// getSubscriptions,
	// removeSubscription,
	// removeSubscriptions,
}
