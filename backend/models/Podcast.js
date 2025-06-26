const mongoose = require('mongoose');

const PodcastSchema = new mongoose.Schema({
  title: String,
  description: String,
  audioUrl: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Podcast', PodcastSchema);