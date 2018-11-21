const chalk = require('chalk')
const Datastore = require('nedb')
const { bindCallback, combineLatest, NEVER } = require('rxjs')
const { catchError, ignoreElements, mapTo, switchMap, tap } = require('rxjs/operators')
const { configurationSetSelector } = require('@ghadyani-framework/node/redux/configurations/selectors')
const { defaultConfigurationsNamespace } = require('@ghadyani-framework/node/redux/configurations/actions')
const { ofTaskName } = require('@ghadyani-framework/node')
const { ofType } = require('redux-observable')
const { START_TASK } = require('@ghadyani-framework/node/redux/tasks/actions')
const { stateSelector } = require('@ghadyani-framework/redux-utils')

const logError = require('$redux/utils/logError')

const configurationSetProps = {
	namespace: defaultConfigurationsNamespace,
}

const createDatabaseEpic = (
	action$,
	// state$,
) => (
	action$
	.pipe(
		ofType(START_TASK),
		ofTaskName(
			'serve',
			'undefined',
		),
		tap(() => {
			const database = (
				new Datastore({
					filename: '.nedb',
				})
			)

			database.loadDatabase(console.log)
		}),
		// switchMap(() => (
		// 	stateSelector({
		// 		props: configurationSetProps,
		// 		selector: configurationSetSelector,
		// 		state$,
		// 	})
		// ))
		ignoreElements(),
	)
)

module.exports = createDatabaseEpic
