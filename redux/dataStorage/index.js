const { combineEpics } = require('redux-observable')
const { combineReducers } = require('redux')

const createDatabaseEpic = require('./createDatabaseEpic')
const databaseReducer = require('./databaseReducer')

const dataStorageEpic = (
	combineEpics(
		createDatabaseEpic,
	)
)

const dataStorageReducer = (
	combineReducers({
		database: databaseReducer,
	})
)

module.exports = {
	dataStorageEpic,
	dataStorageReducer,
}
