const { combineEpics } = require('redux-observable')
const { combineReducers } = require('redux')
const { nodeEpic, nodeReducers } = require('@ghadyani-framework/node')

const {
	httpServersEpic,
	httpServersReducer,
} = require('./httpServers')

const rootEpic = (
	combineEpics(
		httpServersEpic,
		nodeEpic,
	)
)

const rootReducers = {
	...nodeReducers,
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
