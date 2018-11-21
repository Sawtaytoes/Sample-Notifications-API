const { filter } = require('rxjs/operators')

const ofStorageActionId = (
	requiredStorageActionId,
) => (
	filter(({ storageActionId }) => (
		storageActionId === requiredStorageActionId
	))
)

module.exports = ofStorageActionId
