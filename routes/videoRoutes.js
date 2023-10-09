const express = require('express');
const router = express.Router();
const upload = require('../utils/multer');
const videoController = require('../controllers/videoController');

// Create a new video
router.post('/videos', upload.single('video'), videoController.createVideo);

// Get all videos
router.get('/videos', videoController.getVideos);

// Get a video by ID
router.get('/videos/:id', videoController.getVideoById);

// Update a video by ID
router.put('/videos/:id', videoController.updateVideo);

// Delete a video by ID
router.delete('/videos/:id', videoController.deleteVideo);

module.exports = router;
