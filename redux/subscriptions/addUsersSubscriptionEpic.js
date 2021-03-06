const { map, mergeMap } = require('rxjs/operators')
const { merge, of } = require('rxjs')
const { ofType } = require('redux-observable')

const sendDatabaseResponse = require('$redux/utils/sendDatabaseResponse')
const { ADD_USERS_SUBSCRIPTION } = require('./actions')
const { addDatabaseEntries } = require('$redux/dataStorage/actions')

const addUsersSubscriptionEpic = (
	action$,
) => (
	action$
	.pipe(
		ofType(ADD_USERS_SUBSCRIPTION),
		map(({
			request,
			response,
		}) => ({
			response,
			storageActionId: Symbol(),
			subscriptionId: (
				String(
					request
					.body
					.subscriptionId
				)
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
						addDatabaseEntries({
							namespace: 'usersSubscriptions',
							entries: [{
								subscriptionId,
								userId,
							}],
							storageActionId,
						})
					)
				),
			)
		)),
	)
)

module.exports = addUsersSubscriptionEpic
