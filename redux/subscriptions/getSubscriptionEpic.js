const { map, mergeMap } = require('rxjs/operators')
const { merge, of } = require('rxjs')
const { ofType } = require('redux-observable')

const sendDatabaseResponse = require('$redux/utils/sendDatabaseResponse')
const { GET_SUBSCRIPTION } = require('./actions')
const { getDatabaseEntries } = require('$redux/dataStorage/actions')

const getSubscriptionEpic = (
	action$,
) => (
	action$
	.pipe(
		ofType(GET_SUBSCRIPTION),
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
						getDatabaseEntries({
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

module.exports = getSubscriptionEpic
