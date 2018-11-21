const ADD_USERS_SUBSCRIPTION = 'SUBSCRIPTIONS::ADD_USERS_SUBSCRIPTION'
const DELETE_USERS_SUBSCRIPTION = 'SUBSCRIPTIONS::DELETE_USERS_SUBSCRIPTION'
const DELETE_USERS_SUBSCRIPTIONS = 'SUBSCRIPTIONS::DELETE_USERS_SUBSCRIPTIONS'
const GET_SUBSCRIPTIONS = 'SUBSCRIPTIONS::GET_SUBSCRIPTIONS'
const GET_USERS_SUBSCRIPTION = 'SUBSCRIPTIONS::GET_USERS_SUBSCRIPTION'
const GET_USERS_SUBSCRIPTIONS = 'SUBSCRIPTIONS::GET_USERS_SUBSCRIPTIONS'

const addUsersSubscription = ({
	request,
	response,
}) => ({
	request,
	response,
	type: ADD_USERS_SUBSCRIPTION,
})

const deleteUsersSubscription = ({
	request,
	response,
}) => ({
	request,
	response,
	type: DELETE_USERS_SUBSCRIPTION,
})

const deleteUsersSubscriptions = ({
	request,
	response,
}) => ({
	request,
	response,
	type: DELETE_USERS_SUBSCRIPTIONS,
})

const getSubscriptions = ({
	request,
	response,
}) => ({
	request,
	response,
	type: GET_SUBSCRIPTIONS,
})

const getUsersSubscription = ({
	request,
	response,
}) => ({
	request,
	response,
	type: GET_USERS_SUBSCRIPTION,
})

const getUsersSubscriptions = ({
	request,
	response,
}) => ({
	request,
	response,
	type: GET_USERS_SUBSCRIPTIONS,
})

module.exports = {
	ADD_USERS_SUBSCRIPTION,
	addUsersSubscription,
	DELETE_USERS_SUBSCRIPTION,
	DELETE_USERS_SUBSCRIPTIONS,
	deleteUsersSubscription,
	deleteUsersSubscriptions,
	GET_SUBSCRIPTIONS,
	GET_USERS_SUBSCRIPTION,
	GET_USERS_SUBSCRIPTIONS,
	getSubscriptions,
	getUsersSubscription,
	getUsersSubscriptions,
}
