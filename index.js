#!/usr/bin/env node
require('@ghadyani-framework/setup-module-aliases')(__dirname)

const createDatabase = require('$redux/dataStorage/utils/createDatabase')
const createHttpServers = require('$redux/httpServers/utils/createHttpServers')

const {
	rootEpic,
	rootReducers,
} = require('$redux')

const {
	ofReponseType,
	ofRequestType,
} = require('$redux/utils/actionTypeCheckers')

module.exports = {
	createDatabase,
	createHttpServers,
	httpServersEpic: rootEpic,
	httpServersReducers: rootReducers,
	ofReponseType,
	ofRequestType,
}
