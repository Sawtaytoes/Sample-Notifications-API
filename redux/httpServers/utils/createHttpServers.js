const getHttpServerConfig = require('./getHttpServerConfig')
const { addHttpServer } = require('../actions')

const createDispatchableRequest = (
	dispatch,
) => (
	action,
) => (
	request,
	response,
) => {
	dispatch(
		action({
			request,
			response,
		})
	)
}

const createHttpServers = () => (
	({ dispatch }) => {
		const dispatchableRequest = (
			createDispatchableRequest(
				dispatch
			)
		)

		dispatch(
			addHttpServer(
				getHttpServerConfig(
					dispatchableRequest
				)
			)
		)
	}
)

module.exports = createHttpServers
