const mongoose = require('mongoose');

const displayPictureSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
},
  created: {
    type: Date,
    default: Date.now
  }
});

const DisplayPicture = mongoose.model('DisplayPicture', displayPictureSchema);

module.exports = DisplayPicture;
