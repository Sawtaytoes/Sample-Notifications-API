const { combineEpics } = require('redux-observable')
const { combineReducers } = require('redux')
const { nodeEpic, nodeReducers } = require('@ghadyani-framework/node')

const { subscriptionsEpic } = require('./subscriptions')

const {
	dataStorageEpic,
	dataStorageReducer,
} = require('./dataStorage')

const {
	httpServersEpic,
	httpServersReducer,
} = require('./httpServers')

const rootEpic = (
	combineEpics(
		dataStorageEpic,
		httpServersEpic,
		nodeEpic,
		subscriptionsEpic,
	)
)

const rootReducers = {
	...nodeReducers,
	dataStorage: dataStorageReducer,
	httpServers: httpServersReducer,
}

const rootReducer = (
	combineReducers(
		rootReducers,
	)
)

module.exports = {
	rootEpic,
	rootReducers,
	rootReducer,
}
