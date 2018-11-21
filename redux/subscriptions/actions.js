const ADD_SUBSCRIPTION = 'HTTP_SERVERS::ADD_SUBSCRIPTION'

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
