const express = require('express')

const {
	getTest,
	sendResponse,
} = require('../actions')

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
			getTest
		),
	)
	.get(
		'/subscriptions/:subscriptionId',
		dispatchableRequest(
			getTest
		),
	)
	.post(
		'/subscriptions',
		dispatchableRequest(
			getTest
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
			getTest
		),
	)
	.delete(
		'/subscriptions/:subscriptionId',
		dispatchableRequest(
			getTest
		),
	)
)

module.exports = getHttpServerConfig
