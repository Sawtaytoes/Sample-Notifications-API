const ADD_HTTP_SERVER = 'HTTP_SERVERS::ADD_HTTP_SERVER'
const SEND_RESPONSE = 'HTTP_SERVERS::SEND_RESPONSE'

const addHttpServer = (
	server,
) => ({
	server,
	type: ADD_HTTP_SERVER,
})

const sendResponse = ({
	errorMessage,
	message,
	response,
}) => ({
	errorMessage,
	message: (
		message
		|| 'API is working'
	),
	response,
	type: SEND_RESPONSE,
})

module.exports = {
	ADD_HTTP_SERVER,
	addHttpServer,
	SEND_RESPONSE,
	sendResponse,
}
