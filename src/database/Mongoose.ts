import { mongoose as config } from '../config/development.json'

const mongoose = require('mongoose')

// console.log(`mongodb://${config.host}:${config.port}/${config.database}`)
// mongoose.connect(`mongodb://${config.host}:${config.port}/${config.database}`, { useNewUrlParser: true })

// console.log(`mongodb://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}?authSource=admin`)
// mongoose.connect(`mongodb://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}?authSource=admin`, { useNewUrlParser: true })

export default mongoose
