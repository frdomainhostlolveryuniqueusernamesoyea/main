const express = require('express');
const app = express();

app.get('/q&a', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/q&a.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});