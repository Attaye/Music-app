// index.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://mustafa-attaye:mustafa-attaye@todo.963nech.mongodb.net/musicplayer',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Define the song, playlist, and authentication routes
const songRouter = require('./routes/songs');
const playlistRouter = require('./routes/playlists');
const authRouter = require('./routes/auth');
app.use('/songs', songRouter);
app.use('/playlists', playlistRouter);
app.use('/auth', authRouter);

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
