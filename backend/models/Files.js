const mongoose = require('mongoose');
const fileSchema = new mongoose.Schema({
    filename: String,
    data: Buffer,
    userId: String
  }, {timestamps : true});
  
  const File = mongoose.model('File', fileSchema);

  module.exports = File