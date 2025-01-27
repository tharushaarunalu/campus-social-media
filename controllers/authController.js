const User = require('../models/userModel');

// GET register page
exports.getRegister = (req, res) => {
  res.render('register');
};

// POST register form
exports.postRegister = async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = new User({ email, password });
    await newUser.save();
    res.redirect('/login');
  } catch (err) {
    console.error(err);
    res.send('Error registering user.');
  }
};

// GET login page
exports.getLogin = (req, res) => {
  res.render('login');
};

// POST login form
exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.redirect('/index');
    } else {
      res.send('Invalid credentials.');
    }
  } catch (err) {
    console.error(err);
    res.send('Error logging in.');
  }
};

// GET index page
exports.getIndex = (req, res) => {
  res.render('index', { email: 'User Email' }); // Replace with actual user data
};
