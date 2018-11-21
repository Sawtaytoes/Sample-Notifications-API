const { bindNodeCallback } = require('rxjs')
const { map, mergeMap, switchMap } = require('rxjs/operators')
const { ofType } = require('redux-observable')

const catchEpicError = require('$redux/utils/catchEpicError')
const { databaseSelector } = require('$redux/dataStorage/selectors')

const {
	GET_DATABASE_ENTRIES,
	storageActionFailure,
	storageActionSuccessful,
} = require('./actions')

const getDatabaseEntriesEpic = (
	action$,
	state$,
) => (
	action$
	.pipe(
		ofType(GET_DATABASE_ENTRIES),
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
						.find
						.bind(database)
					)(
						searchCriteria,
					)
					.pipe(
						map(payload => ({
							payload,
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

module.exports = getDatabaseEntriesEpic
