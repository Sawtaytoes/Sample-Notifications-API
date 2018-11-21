const { combineEpics } = require('redux-observable')
const { combineReducers } = require('redux')

const addDatabaseEntriesEpic = require('./addDatabaseEntriesEpic')
const createDatabaseEpic = require('./createDatabaseEpic')
const databaseReducer = require('./databaseReducer')
const getDatabaseEntriesEpic = require('./getDatabaseEntriesEpic')

const dataStorageEpic = (
	combineEpics(
		addDatabaseEntriesEpic,
		createDatabaseEpic,
		getDatabaseEntriesEpic,
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
