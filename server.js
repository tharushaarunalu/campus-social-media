const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Import route handlers and controllers
const authRoutes = require('./routes/authRoutes');
const indexRoutes = require('./routes/index');
const groupRoutes = require('./routes/groupRoutes');
const friendRoutes = require('./routes/friendRoutes');
const groupController = require('./controllers/groupController');

// Load environment variables
dotenv.config();

const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Handle JSON data
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.set('view engine', 'ejs'); // Set EJS as the view engine

// Routes
app.use('/', authRoutes); // Authentication routes
app.use('/', indexRoutes); // Index page routes

// Profile route
app.get('/profile', (req, res) => {
  res.render('profile'); // Render the profile.ejs view
});

// Define the /editProfile route
app.get('/editProfile', (req, res) => {
  res.render('editProfile'); // Render the editProfile.ejs view
});
// Define the /editProfile route
app.get('/message', (req, res) => {
  res.render('message'); // Render the editProfile.ejs view
});


// Group routes
app.use('/groups', groupRoutes); // Register group routes
app.get('/groups/create', groupController.createGroupPage); // Show create group form
app.post('/groups/create', groupController.createGroup); // Handle group creation
app.get('/groups/search', groupController.searchGroups); // Handle group search
app.get('/groups/:id', groupController.viewGroup); // View specific group details

// Friend routes
app.use('/friends', friendRoutes); // Register friend routes

// Default error handling middleware
app.use((req, res, next) => {
  res.status(404).render('404', { message: 'Page Not Found' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
