const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: String,
  data: Buffer
}, { timestamps: true });

module.exports = mongoose.model('Image', fileSchema);