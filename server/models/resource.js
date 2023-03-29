const mongoose = require('mongoose')



// Resource Schema Definition
const resourceSchema = new mongoose.Schema({
  name: String,
  desc: String,
  owner: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  date: Date,
  price: Number,
  sold: Number,
  tag: String,
})

resourceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Resource', resourceSchema)
