import { sequelize as config } from '../config/development.json'
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: 'mysql'
})

export default sequelize
