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
		'/test',
		dispatchableRequest(
			getTest
		)
	)
)

module.exports = getHttpServerConfig
