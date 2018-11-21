const STORE_DATABASE = 'HTTP_SERVERS::STORE_DATABASE'

const storeDatabase = (
	database,
) => ({
	database,
	type: STORE_DATABASE,
})

module.exports = {
	STORE_DATABASE,
	storeDatabase,
}
