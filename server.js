// Express and Path modules
const express = require('express');
const path = require('path');

// app object
const app = express();

// Assigning PORT
const HTTP_PORT = process.env.PORT || 8080;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/sir-alex', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/sir-alex.html'));
});

app.get('/2008-squad', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/2008-squad.html'));
});

// Start the server
app.listen(HTTP_PORT, () => console.log(`Server is running: http://localhost:${HTTP_PORT}`));
