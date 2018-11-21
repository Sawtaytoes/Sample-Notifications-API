const { map, mergeMap } = require('rxjs/operators')
const { merge, of } = require('rxjs')
const { ofType } = require('redux-observable')

const sendDatabaseResponse = require('$redux/utils/sendDatabaseResponse')
const { DELETE_USERS_SUBSCRIPTIONS } = require('./actions')
const { deleteDatabaseEntries } = require('$redux/dataStorage/actions')

const deleteUsersSubscriptionsEpic = (
	action$,
) => (
	action$
	.pipe(
		ofType(DELETE_USERS_SUBSCRIPTIONS),
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

module.exports = deleteUsersSubscriptionsEpic
