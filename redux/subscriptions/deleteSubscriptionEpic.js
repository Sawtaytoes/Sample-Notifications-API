const { map, mergeMap } = require('rxjs/operators')
const { merge, of } = require('rxjs')
const { ofType } = require('redux-observable')

const sendDatabaseResponse = require('$redux/utils/sendDatabaseResponse')
const { DELETE_SUBSCRIPTION } = require('./actions')
const { deleteDatabaseEntries } = require('$redux/dataStorage/actions')

const deleteSubscriptionEpic = (
	action$,
) => (
	action$
	.pipe(
		ofType(DELETE_SUBSCRIPTION),
		map(({
			request,
			response,
		}) => ({
			response,
			storageActionId: Symbol(),
			subscriptionId: (
				request
				.params
				.subscriptionId
			),
			userId: (
				request
				.headers['user-id']
			),
		})),
		mergeMap(({
			response,
			storageActionId,
			subscriptionId,
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
								subscriptionId,
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

module.exports = deleteSubscriptionEpic
