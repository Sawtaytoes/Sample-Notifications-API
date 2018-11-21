const { map, mergeMap } = require('rxjs/operators')
const { merge, of } = require('rxjs')
const { ofType } = require('redux-observable')

const sendDatabaseResponse = require('$redux/utils/sendDatabaseResponse')
const { DELETE_SUBSCRIPTIONS } = require('./actions')
const { deleteDatabaseEntries } = require('$redux/dataStorage/actions')

const deleteSubscriptionsEpic = (
	action$,
) => (
	action$
	.pipe(
		ofType(DELETE_SUBSCRIPTIONS),
		map(({
			request,
			response,
		}) => ({
			response,
			storageActionId: Symbol(),
			userId: (
				request
				.headers['user-id']
			),
		})),
		mergeMap(({
			response,
			storageActionId,
			userId,
		}) => (
			merge(
				(
					sendDatabaseResponse({
						action$,
						storageActionId,
						response,
					})
				),
				(
					of(
						deleteDatabaseEntries({
							searchCriteria: {
								userId,
							},
							storageActionId,
						})
					)
				),
			)
		)),
	)
)

module.exports = deleteSubscriptionsEpic
