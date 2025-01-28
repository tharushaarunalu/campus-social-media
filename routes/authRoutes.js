const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Default route (e.g., redirect to login page)
router.get('/', (req, res) => {
  res.redirect('/login');
});

// Register routes
router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);

// Login routes
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);

// Index route (after login)
router.get('/index', authController.getIndex);

// Define the /editProfile route
router.get('/editProfile', (req, res) => {
  res.render('editProfile'); // Render the editProfile.ejs view
});
router.post('/updateProfile', (req, res) => {
  const { name, email } = req.body;

  // Logic to update the user profile in the database
  console.log('Updated Profile:', { name, email });

  // Redirect to the profile page or any other page
  res.redirect('/auth/profile');
});


module.exports = router;
