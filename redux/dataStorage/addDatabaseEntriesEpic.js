const { bindNodeCallback } = require('rxjs')
const { map, mergeMap, switchMap } = require('rxjs/operators')
const { ofType } = require('redux-observable')

const catchEpicError = require('$redux/utils/catchEpicError')
const { databaseSelector } = require('$redux/dataStorage/selectors')

const {
	ADD_DATABASE_ENTRIES,
	storageActionFailure,
	storageActionSuccessful,
} = require('./actions')

const addDatabaseEntriesEpic = (
	action$,
	state$,
) => (
	action$
	.pipe(
		ofType(ADD_DATABASE_ENTRIES),
		mergeMap(({
			entries,
			storageActionId,
		}) => (
			state$
			.pipe(
				map(databaseSelector),
				switchMap(({ database }) => (
					bindNodeCallback(
						database
						.insert
						.bind(database)
					)(
						entries,
					)
					.pipe(
						map(payload => ({
							payload,
							storageActionId,
						})),
						map(storageActionSuccessful),
						catchEpicError(error => (
							storageActionFailure({
								error,
								storageActionId,
							})
						)),
					)
				)),
			)
		)),
	)
)

module.exports = addDatabaseEntriesEpic
