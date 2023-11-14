const express = require('express');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => res.sendFile(__dirname + '/views/home.html'));
app.get('/about', (req, res) => res.sendFile(__dirname + '/views/about.html'));
app.get('/projects', (req, res) => res.sendFile(__dirname + '/views/projects.html'));
app.get('/notes', (req, res) => res.sendFile(__dirname + '/views/notes.html'));
app.get('/contact', (req, res) => res.sendFile(__dirname + '/views/contact.html'));

// Start the server
app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
