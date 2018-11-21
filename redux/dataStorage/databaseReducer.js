const { createReducer } = require('@ghadyani-framework/redux-utils')

const { STORE_DATABASE } = require('./actions')

const initialState = null

const reducerActions = {
	[STORE_DATABASE]: (
		(prevState, { database }) => (
			database
		)
	),
}

const databaseReducer = (
	createReducer(
		reducerActions,
		initialState,
	)
)

module.exports = databaseReducer
