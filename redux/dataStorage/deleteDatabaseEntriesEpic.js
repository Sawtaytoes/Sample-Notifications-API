const { bindNodeCallback } = require('rxjs')
const { map, mergeMap, switchMap } = require('rxjs/operators')
const { ofType } = require('redux-observable')

const catchEpicError = require('$redux/utils/catchEpicError')
const { databaseSelector } = require('$redux/dataStorage/selectors')

const {
	DELETE_DATABASE_ENTRIES,
	storageActionFailure,
	storageActionSuccessful,
} = require('./actions')

const deleteDatabaseEntriesEpic = (
	action$,
	state$,
) => (
	action$
	.pipe(
		ofType(DELETE_DATABASE_ENTRIES),
		mergeMap(({
			searchCriteria,
			storageActionId,
		}) => (
			state$
			.pipe(
				map(databaseSelector),
				switchMap(({ database }) => (
					bindNodeCallback(
						database
						.remove
						.bind(database)
					)(
						searchCriteria,
						{ multi: true }
					)
					.pipe(
						map(entriesRemoved => ({
							payload: {
								entriesRemoved,
							},
							storageActionId,
						})),
						map(storageActionSuccessful),
						catchEpicError(errorMessage => (
							storageActionFailure({
								errorMessage,
								storageActionId,
							})
						)),
					)
				)),
			)
		)),
	)
)

module.exports = deleteDatabaseEntriesEpic
