'use strict'

const {
  DB_NAME,
  DB_SERVER,
  DB_PORT,
  DB_USER,
  DB_PASSWORD
} = require('../config')

const fs = require('fs')
const path = require('path')

const qgisProject = (() => {
  return fs
    .readFileSync(
      path.join(__dirname, '../templates/sap_config_template.qgs'),
      'utf-8'
    )
    .replace(/{{DATABASE}}/g, DB_NAME)
    .replace(/{{HOST}}/g, DB_SERVER)
    .replace(/{{PORT}}/g, DB_PORT)
    .replace(/{{USER}}/g, DB_USER)
    .replace(/{{PASSWORD}}/g, DB_PASSWORD)
})()

module.exports = qgisProject