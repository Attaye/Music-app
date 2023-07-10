// components/Library.js

import React from 'react';

const Library = ({ songs, setCurrentSong, currentSong }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <ul>
        {songs.map((song) => (
          <li
            key={song.id}
            className={`library-song ${song.id === currentSong.id ? 'selected' : ''}`}
            onClick={() => setCurrentSong(song)}
          >
            <img src={song.cover} alt={song.title} />
            <div className="song-description">
              <h3>{song.title}</h3>
              <h4>{song.artist}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Library;
