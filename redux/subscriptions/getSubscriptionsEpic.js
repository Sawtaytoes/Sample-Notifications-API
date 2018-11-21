const { map, mergeMap } = require('rxjs/operators')
const { merge, of } = require('rxjs')
const { ofType } = require('redux-observable')

const sendDatabaseResponse = require('$redux/utils/sendDatabaseResponse')
const { GET_SUBSCRIPTIONS } = require('./actions')
const { getDatabaseEntries } = require('$redux/dataStorage/actions')

const getSubscriptionsEpic = (
	action$,
) => (
	action$
	.pipe(
		ofType(GET_SUBSCRIPTIONS),
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
						getDatabaseEntries({
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

module.exports = getSubscriptionsEpic
