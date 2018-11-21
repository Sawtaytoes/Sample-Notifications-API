const { map } = require('rxjs/operators')
const { merge } = require('rxjs')
const { ofType } = require('redux-observable')

const ofStorageActionId = require('$redux/utils/ofStorageActionId')
const { sendResponse } = require('$redux/httpServers/actions')

const {
	STORAGE_ACTION_FAILURE,
	STORAGE_ACTION_SUCCESSFUL,
} = require('$redux/dataStorage/actions')

const sendDatabaseResponse = ({
	action$,
	storageActionId,
	response,
}) => (
	action$
	.pipe(
		ofType(
			STORAGE_ACTION_FAILURE,
			STORAGE_ACTION_SUCCESSFUL,
		),
		ofStorageActionId(storageActionId),
		map(({
			errorMessage,
			payload,
		}) => ({
			errorMessage,
			message: payload,
			response,
		})),
		map(sendResponse),
	)
)

module.exports = sendDatabaseResponse
