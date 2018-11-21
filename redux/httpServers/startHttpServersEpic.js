const chalk = require('chalk')
const { bindCallback, combineLatest, NEVER } = require('rxjs')
const { catchError, ignoreElements, mapTo, switchMap, tap } = require('rxjs/operators')
const { configurationSetSelector } = require('@ghadyani-framework/node/redux/configurations/selectors')
const { defaultConfigurationsNamespace } = require('@ghadyani-framework/node/redux/configurations/actions')
const { ofTaskName } = require('@ghadyani-framework/node')
const { ofType } = require('redux-observable')
const { START_TASK } = require('@ghadyani-framework/node/redux/tasks/actions')
const { stateSelector } = require('@ghadyani-framework/redux-utils')

const getServerUrl = require('./utils/getServerUrl')
const logError = require('./utils/logError')
const { httpServerSelector } = require('./selectors')

const configurationSetProps = {
	namespace: defaultConfigurationsNamespace,
}

const startHttpServersEpic = (
	action$,
	state$,
) => (
	action$
	.pipe(
		ofType(START_TASK),
		ofTaskName(
			'serve',
			'undefined',
		),
		switchMap(() => (
			combineLatest(
				stateSelector({
					props: configurationSetProps,
					selector: configurationSetSelector,
					state$,
				}),
				stateSelector({
					selector: httpServerSelector,
					state$,
				}),
			)
		)),
		switchMap(([
			{
				hostname,
				port,
				protocol,
			},
			httpServer,
		]) => (
			bindCallback(
				httpServer
				.listen
				.bind(httpServer)
			)(
				port
			)
			.pipe(
				catchError(error => {
					logError(error)

					return NEVER
				}),
				mapTo(
					getServerUrl({
						hostname,
						port,
						protocol,
					})
				),
				tap(serverUrl => (
					console
					.info(
						"HTTP Server running as",
						(
							chalk
							.yellowBright(
								serverUrl
							)
						)
					)
				)),
			)
		)),
		ignoreElements(),
	)
)

module.exports = startHttpServersEpic
