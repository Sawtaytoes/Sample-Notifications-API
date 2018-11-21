const Datastore = require('nedb')
const { bindNodeCallback } = require('rxjs')
const { map, mapTo, switchMap } = require('rxjs/operators')
const { ofTaskName } = require('@ghadyani-framework/node')
const { ofType } = require('redux-observable')
const { START_TASK } = require('@ghadyani-framework/node/redux/tasks/actions')

const catchEpicError = require('$redux/utils/catchEpicError')
const { storeDatabase } = require('./actions')

const createDatabaseEpic = (
	action$,
) => (
	action$
	.pipe(
		ofType(START_TASK),
		ofTaskName(
			'serve',
			'undefined',
		),
		map(() => (
			new Datastore({
				filename: 'subscriptions.db',
			})
		)),
		switchMap(database => (
			bindNodeCallback(
				database
				.loadDatabase
				.bind(database)
			)()
			.pipe(
				catchEpicError(),
				mapTo(database),
			)
		)),
		map(storeDatabase),
	)
)

module.exports = createDatabaseEpic
