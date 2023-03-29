const mongoose = require('mongoose')

// Resource Schema Definition
const userSchema = new mongoose.Schema({
  name: String,
  discordId: Number,
  balance: Number,
  resources: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Resource"
  }],
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    //delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('User', userSchema)
