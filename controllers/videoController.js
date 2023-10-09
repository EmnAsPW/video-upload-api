
const Video = require('../models/Video');



exports.createVideo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const video = new Video({
      title,
      description,
    //   videoPath: req.file.path, // Store the file path
    });
    await video.save();
    res.status(201).json(video);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create video' });
  }
};



exports.getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch videos' });
  }
};



exports.getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.json(video);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch video' });
  }
};




exports.updateVideo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const video = await Video.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.json(video);
  } catch (error) {
    res.status(500).json({ error: 'Unable to update video' });
  }
};



exports.deleteVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.json({ message: 'Video deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete video' });
  }
};
