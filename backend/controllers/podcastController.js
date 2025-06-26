const Podcast = require('../models/Podcast');

exports.getAll = async (req, res) => {
  try {
    const podcasts = await Podcast.find().sort({ createdAt: -1 });
    res.json(podcasts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching podcasts' });
  }
};

exports.create = async (req, res) => {
  try {
    const { title, description, audioUrl } = req.body;
    const newPodcast = new Podcast({ title, description, audioUrl });
    await newPodcast.save();
    res.status(201).json(newPodcast);
  } catch (err) {
    res.status(400).json({ message: 'Error creating podcast' });
  }
};