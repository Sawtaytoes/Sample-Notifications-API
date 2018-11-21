const express = require('express')

const { sendResponse } = require('../actions')

const {
	addSubscription,
	deleteSubscription,
	deleteSubscriptions,
	getSubscription,
	getSubscriptions,
} = require('$redux/subscriptions/actions')

const getHttpServerConfig = (
	dispatchableRequest,
) => (
	express()
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
	.get(
		'/subscriptions/:subscriptionId',
		dispatchableRequest(
			getSubscription
		),
	)
	.post(
		'/subscriptions',
		dispatchableRequest(
			addSubscription
		),
	)

	// Subscriptions may require updates such as changing how often to be notified.
	// In this PoC, I've opted to exclude this functionality as it adds a significant amount of scope-creep.
	// .put(
	// 	'/subscriptions/:subscriptionId',
	// 	dispatchableRequest(
	// 		updateSubscription
	// 	),
	// )

	.delete(
		'/subscriptions',
		dispatchableRequest(
			deleteSubscriptions
		),
	)
	.delete(
		'/subscriptions/:subscriptionId',
		dispatchableRequest(
			deleteSubscription
		),
	)
)

module.exports = getHttpServerConfig
