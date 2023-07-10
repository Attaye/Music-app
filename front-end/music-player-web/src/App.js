// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Library from './components/Library';
import Player from './components/Player';
import LoginForm from './components/LoginForm';

const App = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    // Fetch the songs from your backend API
    axios
      .get('http://localhost:5000/songs')
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching songs:', error);
      });
  }, []);

  useEffect(() => {
    // Get the token from localStorage or secure cookie
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  const handleLogout = () => {
    // Remove the token from localStorage or secure cookie
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <div>
      <h1>Music Player</h1>
      {token ? (
        <div>
          <Player currentSong={currentSong} />
          <Library songs={songs} setCurrentSong={setCurrentSong} currentSong={currentSong} />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default App;
