const Datastore = require('nedb')
const { bindNodeCallback } = require('rxjs')
const { map, mapTo, mergeMap } = require('rxjs/operators')
const { ofType } = require('redux-observable')

const catchEpicError = require('$redux/utils/catchEpicError')

const {
	LOAD_DATABASE,
	storeDatabase,
} = require('./actions')

const loadDatabaseEpic = (
	action$,
) => (
	action$
	.pipe(
		ofType(LOAD_DATABASE),
		map(({ databaseName }) => (
			new Datastore({
				filename: `${databaseName}.db`,
			})
		)),
		mergeMap(database => (
			bindNodeCallback(
				database
				.loadDatabase
				.bind(database)
			)()
			.pipe(
				catchEpicError(),
				mapTo(database),
				map(storeDatabase),
			)
		)),
	)
)

module.exports = loadDatabaseEpic
