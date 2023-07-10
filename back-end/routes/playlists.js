// routes/playlists.js

const express = require('express');
const router = express.Router();
const Playlist = require('../models/Playlist');

// Fetch all playlists
router.get('/', (req, res) => {
  Playlist.find()
    .then(playlists => res.json(playlists))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new playlist
router.post('/', (req, res) => {
  const { name, songs } = req.body;

  const newPlaylist = new Playlist({
    name,
    songs,
  });

  newPlaylist.save()
    .then(() => res.json('Playlist added successfully'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
