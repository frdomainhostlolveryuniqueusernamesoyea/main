const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '..', '..')));

app.get('/favicon.webp', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'favicon.webp'));
});

app.get('/q&a', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'pages', 'q&a.html'));
});

module.exports = app;
