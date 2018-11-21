const ADD_DATABASE_ENTRIES = 'DATA_STORAGE::ADD_DATABASE_ENTRIES'
const STORAGE_ACTION_FAILURE = 'DATA_STORAGE::STORAGE_ACTION_FAILURE'
const STORAGE_ACTION_SUCCESSFUL = 'DATA_STORAGE::STORAGE_ACTION_SUCCESSFUL'
const STORE_DATABASE = 'DATA_STORAGE::STORE_DATABASE'

const addDatabaseEntries = ({
	entries,
	storageActionId,
}) => ({
	entries,
	storageActionId,
	type: ADD_DATABASE_ENTRIES,
})

const storageActionFailure = ({
	errorMessage,
	storageActionId,
}) => ({
	errorMessage,
	storageActionId,
	type: STORAGE_ACTION_FAILURE,
})

const storageActionSuccessful = ({
	payload,
	storageActionId,
}) => ({
	payload,
	storageActionId,
	type: STORAGE_ACTION_SUCCESSFUL,
})

const storeDatabase = (
	database,
) => ({
	database,
	type: STORE_DATABASE,
})

module.exports = {
	ADD_DATABASE_ENTRIES,
	addDatabaseEntries,
	STORAGE_ACTION_FAILURE,
	STORAGE_ACTION_SUCCESSFUL,
	storageActionFailure,
	storageActionSuccessful,
	STORE_DATABASE,
	storeDatabase,
}
