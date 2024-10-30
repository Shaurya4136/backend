// routes/clubProfileRoutes.js
const express = require('express');
const router = express.Router();
const { getClubProfile, updateClubProfile, createClubProfile } = require('../controllers/clubProfileController');

// Get a specific club profile by ID
router.get('/:id', getClubProfile);

// Create a new club profile
router.post('/', createClubProfile);

// Update an existing club profile
router.put('/:id', updateClubProfile);

module.exports = router;
