const express = require('express');
const router = express.Router();
const Group = require('../models/group');  // Ensure this is the correct path to your model
const Post = require('../models/post');  // Ensure this is the correct path to your model
const Notification = require('../models/notification'); // Ensure this is the correct path

// Home route
router.get('/', async (req, res) => {
    try {
        // Fetch groups from your database (replace with your actual database query)
        const groups = await Group.find();  // If using MongoDB
        const posts = await Post.find();    // Assuming you also have posts
        const notifications = await Notification.find(); // Your notifications data
        
        res.render('home', {
            user: req.user,  // Assuming you're storing the logged-in user data
            posts: posts,
            groups: groups,  // Ensure that this data is passed correctly
            notifications: notifications
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
