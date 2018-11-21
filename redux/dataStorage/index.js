const { combineEpics } = require('redux-observable')
const { combineReducers } = require('redux')

const addDatabaseEntriesEpic = require('./addDatabaseEntriesEpic')
const databaseReducer = require('./databaseReducer')
const deleteDatabaseEntriesEpic = require('./deleteDatabaseEntriesEpic')
const getDatabaseEntriesEpic = require('./getDatabaseEntriesEpic')
const loadDatabaseEpic = require('./loadDatabaseEpic')

const dataStorageEpic = (
	combineEpics(
		addDatabaseEntriesEpic,
		deleteDatabaseEntriesEpic,
		getDatabaseEntriesEpic,
		loadDatabaseEpic,
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
