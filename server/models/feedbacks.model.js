const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  content: { type: String },
  photo: { type: String },
  name: { type: Number },
  role: { type: String },
});

module.exports = mongoose.model('Feedback', feedbackSchema);