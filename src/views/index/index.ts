import template from './template.marko'
import sequelize from '../../database/Sequelize'
// import mongoose from '../../database/Mongoose'

// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', function () {
//   // we're connected!
// })
// const messageSchema = new mongoose.Schema({
//   name: String
// })
// const Message = mongoose.model('Message', messageSchema)
// Message.find(function (err, messages) {
//   if (err) return console.error(err)
//   console.log('The messages are...')
//   console.log(messages)
// })

(async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})()

export default (req, res) => {
  res.marko(template, {})
}
