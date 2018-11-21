#!/usr/bin/env node
require('@ghadyani-framework/setup-module-aliases')(__dirname)

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
	createHttpServers,
	httpServersEpic: rootEpic,
	httpServersReducers: rootReducers,
	ofReponseType,
	ofRequestType,
}
