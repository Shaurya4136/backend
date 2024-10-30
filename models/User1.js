const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Student', 'club head', 'college'], required: true }, // Define the role
});

const User = mongoose.model('User', userSchema);
module.exports = User;
