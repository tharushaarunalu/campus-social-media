const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    media: { type: String, default: null }, // Path to the uploaded media
    mediaType: { type: String, default: null }, // Type of media (image, video, audio)
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
