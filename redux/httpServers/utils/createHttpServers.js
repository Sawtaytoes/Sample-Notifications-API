const getHttpServerConfig = require('./getHttpServerConfig')
const { addHttpServer } = require('../actions')

const createDispatchableRequest = (
	dispatch,
) => (
	action,
) => (
	request,
	response,
	next,
) => {
	dispatch(
		action({
			request,
			response,
		})
	)

	next()
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
