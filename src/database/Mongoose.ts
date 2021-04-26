import { development as config } from '../config/mongoose.json'
const mongoose = require('mongoose')

mongoose.connect(`mongodb://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}?authSource=admin`, { useNewUrlParser: true, useUnifiedTopology: true })

export default mongoose
