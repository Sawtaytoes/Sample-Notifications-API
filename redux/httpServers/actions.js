const ADD_HTTP_SERVER = 'HTTP_SERVERS::ADD_HTTP_SERVER'
const GET_TEST = 'HTTP_SERVERS::GET_TEST'
const SEND_RESPONSE = 'HTTP_SERVERS::SEND_RESPONSE'

const addHttpServer = (
	server,
) => ({
	server,
	type: ADD_HTTP_SERVER,
})

const getTest = ({
	request,
	response,
}) => ({
	request,
	response,
	type: GET_TEST,
})

const sendResponse = ({
	message,
	response,
}) => ({
	message: message || 'API is working',
	response,
	type: SEND_RESPONSE,
})

module.exports = {
	ADD_HTTP_SERVER,
	addHttpServer,
	GET_TEST,
	getTest,
	SEND_RESPONSE,
	sendResponse,
}
