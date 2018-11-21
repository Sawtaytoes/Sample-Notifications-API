const STORE_DATABASE = 'HTTP_SERVERS::STORE_DATABASE'

const storeDatabase = ({
	request,
	response,
}) => ({
	request,
	response,
	type: STORE_DATABASE,
})

module.exports = {
	STORE_DATABASE,
	storeDatabase,
}
