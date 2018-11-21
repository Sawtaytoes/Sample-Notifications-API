const { map, mergeMap } = require('rxjs/operators')
const { merge, of } = require('rxjs')
const { ofType } = require('redux-observable')

const sendDatabaseResponse = require('$redux/utils/sendDatabaseResponse')
const { GET_USERS_SUBSCRIPTIONS } = require('./actions')
const { getDatabaseEntries } = require('$redux/dataStorage/actions')

const getUsersSubscriptionsEpic = (
	action$,
) => (
	action$
	.pipe(
		ofType(GET_USERS_SUBSCRIPTIONS),
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
							namespace: 'usersSubscriptions',
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

module.exports = getUsersSubscriptionsEpic
