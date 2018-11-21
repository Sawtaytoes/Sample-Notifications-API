const { map, mergeMap } = require('rxjs/operators')
const { merge, of } = require('rxjs')
const { ofType } = require('redux-observable')

const sendDatabaseResponse = require('$redux/utils/sendDatabaseResponse')
const { GET_USERS_SUBSCRIPTION } = require('./actions')
const { getDatabaseEntries } = require('$redux/dataStorage/actions')

const getUsersSubscriptionEpic = (
	action$,
) => (
	action$
	.pipe(
		ofType(GET_USERS_SUBSCRIPTION),
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
							namespace: 'usersSubscriptions',
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

module.exports = getUsersSubscriptionEpic
