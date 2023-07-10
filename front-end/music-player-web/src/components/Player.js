// components/Player.js

import React from 'react';

const Player = ({ currentSong }) => {
  return (
    <div className="player">
      <h2>Now Playing: {currentSong.title}</h2>
      {/* Add audio playback controls */}
      <audio src={currentSong.url} controls autoPlay></audio>
    </div>
  );
};

export default Player;
