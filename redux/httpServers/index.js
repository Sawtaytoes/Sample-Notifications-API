const { combineEpics } = require('redux-observable')
const { combineReducers } = require('redux')

const sendResponseEpic = require('./sendResponseEpic')
const serverReducer = require('./serverReducer')
const startHttpServersEpic = require('./startHttpServersEpic')

const httpServersEpic = (
	combineEpics(
		sendResponseEpic,
		startHttpServersEpic,
	)
)

const httpServersReducer = (
	combineReducers({
		server: serverReducer,
	})
)

module.exports = {
	httpServersEpic,
	httpServersReducer,
}
