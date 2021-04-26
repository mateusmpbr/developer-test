import template from './template.marko'
import sequelize from '../../database/Sequelize'
import mongoose from '../../database/Mongoose'

(async () => {
  try {
    await sequelize.authenticate()
    console.log('Sequelize connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database from Sequelize:', error)
  }
})()

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Unable to connect to the database from Mongoose:'))
db.once('open', function () {
  console.log('Mongoose connection has been established successfully.')
})

// const messageSchema = new mongoose.Schema({
//   name: String
// })
// const Message = mongoose.model('Message', messageSchema)
// Message.find(function (err, messages) {
//   if (err) return console.error(err)
//   console.log('The messages are...')
//   console.log(messages)
// })

export default (req, res) => {
  res.marko(template, {})
}
