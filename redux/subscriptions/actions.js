const ADD_SUBSCRIPTION = 'SUBSCRIPTIONS::ADD_SUBSCRIPTION'
const GET_SUBSCRIPTION = 'SUBSCRIPTIONS::GET_SUBSCRIPTION'
const GET_SUBSCRIPTIONS = 'SUBSCRIPTIONS::GET_SUBSCRIPTIONS'
const DELETE_SUBSCRIPTION = 'SUBSCRIPTIONS::DELETE_SUBSCRIPTION'
const DELETE_SUBSCRIPTIONS = 'SUBSCRIPTIONS::DELETE_SUBSCRIPTIONS'

const addSubscription = ({
	request,
	response,
}) => ({
	request,
	response,
	type: ADD_SUBSCRIPTION,
})

const getSubscription = ({
	request,
	response,
}) => ({
	request,
	response,
	type: GET_SUBSCRIPTION,
})

const getSubscriptions = ({
	request,
	response,
}) => ({
	request,
	response,
	type: GET_SUBSCRIPTIONS,
})

const deleteSubscription = ({
	request,
	response,
}) => ({
	request,
	response,
	type: DELETE_SUBSCRIPTION,
})

const deleteSubscriptions = ({
	request,
	response,
}) => ({
	request,
	response,
	type: DELETE_SUBSCRIPTIONS,
})

module.exports = {
	ADD_SUBSCRIPTION,
	addSubscription,
	GET_SUBSCRIPTION,
	GET_SUBSCRIPTIONS,
	getSubscription,
	getSubscriptions,
	DELETE_SUBSCRIPTION,
	DELETE_SUBSCRIPTIONS,
	deleteSubscription,
	deleteSubscriptions,
}
