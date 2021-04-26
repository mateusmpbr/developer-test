import { development as config } from '../config/sequelize.json'
import { initModels } from '@models/init-models'

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: 'mysql'
})

initModels(sequelize)

export default sequelize
