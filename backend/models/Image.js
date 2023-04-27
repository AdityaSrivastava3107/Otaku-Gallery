const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  description: { type: String, required: true },
  imageUrl: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Image', imageSchema);