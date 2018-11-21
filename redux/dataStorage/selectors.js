const databaseSelector = ({
	dataStorage,
}) => ({
	database: (
		dataStorage
		.database
	),
})

module.exports = {
	databaseSelector,
}
