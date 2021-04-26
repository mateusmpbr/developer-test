import mongoose from '../../database/Mongoose'

var Message = mongoose.model('Message', { message: String })

export default Message
