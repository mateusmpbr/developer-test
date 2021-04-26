import mongoose from '../../database/Mongoose'

var Media = mongoose.model('Media', { media: String })

export default Media
