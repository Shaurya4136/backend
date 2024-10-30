// models/ClubProfile.js
const mongoose = require('mongoose');

const ClubProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type: String,
    default: '',
  },
  avatar: {
    type: String,
    default: '',
  },
  foundedDate: {
    type: Date,
    default: Date.now,
  },
  activities: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model('ClubProfile', ClubProfileSchema);
