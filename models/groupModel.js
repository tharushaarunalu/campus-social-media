const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Admin reference
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Array of members
    joinRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Pending requests
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Group', groupSchema);
