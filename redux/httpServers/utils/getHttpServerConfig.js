const cors = require('cors')
const express = require('express')

const { sendResponse } = require('../actions')

const {
	addUsersSubscription,
	deleteUsersSubscription,
	deleteUsersSubscriptions,
	getSubscriptions,
	getUsersSubscription,
	getUsersSubscriptions,
} = require('$redux/subscriptions/actions')

const getHttpServerConfig = (
	dispatchableRequest,
) => (
	express()
	.use(cors())
	.use(
		express
		.json()
	)
	.get(
		'/',
		dispatchableRequest(
			sendResponse
		)
	)
	.get(
		'/subscriptions',
		dispatchableRequest(
			getSubscriptions
		),
	)
	.delete(
		'/users/subscriptions',
		dispatchableRequest(
			deleteUsersSubscriptions
		),
	)
	.delete(
		'/users/subscriptions/:subscriptionId',
		dispatchableRequest(
			deleteUsersSubscription
		),
	)
	.get(
		'/users/subscriptions',
		dispatchableRequest(
			getUsersSubscriptions
		),
	)
	.get(
		'/users/subscriptions/:subscriptionId',
		dispatchableRequest(
			getUsersSubscription
		),
	)
	.post(
		'/users/subscriptions',
		dispatchableRequest(
			addUsersSubscription
		),
	)
)

module.exports = getHttpServerConfig
