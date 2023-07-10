// routes/songs.js

const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

// Fetch all songs
router.get('/', (req, res) => {
  Song.find()
    .then(songs => res.json(songs))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
