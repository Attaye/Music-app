// components/LoginForm.js

import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/auth/login', { username, password })
      .then((response) => {
        // Store the token in localStorage or a secure cookie
        const token = response.data.token;
        localStorage.setItem('token', token);

        // Reset the form
        setUsername('');
        setPassword('');
        setError('');
      })
      .catch((error) => {
        setError('Invalid credentials');
      });
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
