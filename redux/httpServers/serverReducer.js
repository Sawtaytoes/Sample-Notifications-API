const { createReducer } = require('@ghadyani-framework/redux-utils')

const { ADD_HTTP_SERVER } = require('./actions')

const initialState = []

const reducerActions = {
	[ADD_HTTP_SERVER]: (
		(prevState, { server }) => (
			server
		)
	),
}

const serverReducer = (
	createReducer(
		reducerActions,
		initialState,
	)
)

module.exports = serverReducer
