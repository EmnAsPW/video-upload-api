
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, // Remove leading/trailing whitespace
  },
  description: {
    type: String,
    trim: true,
  },
//   videoPath: {
//     type: String,
//     required: true,
//   },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Video', videoSchema);
