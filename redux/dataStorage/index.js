const { combineEpics } = require('redux-observable')
const { combineReducers } = require('redux')

const addDatabaseEntriesEpic = require('./addDatabaseEntriesEpic')
const createDatabaseEpic = require('./createDatabaseEpic')
const databaseReducer = require('./databaseReducer')

const dataStorageEpic = (
	combineEpics(
		addDatabaseEntriesEpic,
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
