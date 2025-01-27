// models/group.js

const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, default: '/images/default-group.png' },
  members: { type: Number, default: 0 }
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
