const { combineEpics } = require('redux-observable')
const { combineReducers } = require('redux')

const addDatabaseEntriesEpic = require('./addDatabaseEntriesEpic')
const createDatabaseEpic = require('./createDatabaseEpic')
const databaseReducer = require('./databaseReducer')
const deleteDatabaseEntriesEpic = require('./deleteDatabaseEntriesEpic')
const getDatabaseEntriesEpic = require('./getDatabaseEntriesEpic')

const dataStorageEpic = (
	combineEpics(
		addDatabaseEntriesEpic,
		createDatabaseEpic,
		deleteDatabaseEntriesEpic,
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
