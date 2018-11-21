const { loadDatabase } = require('../actions')

const createDatabase = (
	databaseName,
) => ({
	dispatch,
}) => {
	dispatch(
		loadDatabase(
			databaseName,
		)
	)
}

module.exports = createDatabase
