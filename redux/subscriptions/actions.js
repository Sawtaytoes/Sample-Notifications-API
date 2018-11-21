const ADD_SUBSCRIPTION = 'SUBSCRIPTIONS::ADD_SUBSCRIPTION'
const GET_SUBSCRIPTION = 'SUBSCRIPTIONS::GET_SUBSCRIPTION'
const GET_SUBSCRIPTIONS = 'SUBSCRIPTIONS::GET_SUBSCRIPTIONS'
const REMOVE_SUBSCRIPTION = 'SUBSCRIPTIONS::REMOVE_SUBSCRIPTION'
const REMOVE_SUBSCRIPTIONS = 'SUBSCRIPTIONS::REMOVE_SUBSCRIPTIONS'

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

const removeSubscription = ({
	request,
	response,
}) => ({
	request,
	response,
	type: REMOVE_SUBSCRIPTION,
})

const removeSubscriptions = ({
	request,
	response,
}) => ({
	request,
	response,
	type: REMOVE_SUBSCRIPTIONS,
})

module.exports = {
	ADD_SUBSCRIPTION,
	addSubscription,
	GET_SUBSCRIPTION,
	GET_SUBSCRIPTIONS,
	getSubscription,
	getSubscriptions,
	REMOVE_SUBSCRIPTION,
	REMOVE_SUBSCRIPTIONS,
	removeSubscription,
	removeSubscriptions,
}
