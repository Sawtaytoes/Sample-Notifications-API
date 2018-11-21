// Include this import before other local imports.
require('@ghadyani-framework/setup-module-aliases')(__dirname)

const fetch = require('node-fetch')
const { applyMiddleware, createStore } = require('redux')
const { createActionLoggerMiddleware } = require('@ghadyani-framework/redux-utils')
const { createConfigurationSet, runTasks } = require('@ghadyani-framework/node')
const { createEpicMiddleware } = require('redux-observable')
const { of } = require('rxjs')
const { tap } = require('rxjs/operators')

const {
	createDatabase,
	createHttpServers,
} = require('./')

const {
	rootEpic,
	rootReducer,
} = require('$redux')

const actionLoggerMiddleware = (
	createActionLoggerMiddleware()
)

const epicMiddleware = (
	createEpicMiddleware({
		dependencies: {
			fetch,
		},
	})
)

const middleware = (
	applyMiddleware(
		actionLoggerMiddleware,
		epicMiddleware
	)
)

const store = (
	createStore(
		rootReducer,
		middleware,
	)
)

epicMiddleware
.run(rootEpic)

of(store)
.pipe(
	tap(createConfigurationSet({})),
	tap(createDatabase('usersSubscriptions')),
	tap(createHttpServers()),
	tap(
		runTasks(
			'lint',
			'serve',
		)
	),
)
.subscribe()
