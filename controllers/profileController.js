const User = require('../models/userModel'); // Mongoose User model
const path = require('path');
const fs = require('fs');

module.exports = {
    // GET: Render profile page
    getProfile: async (req, res) => {
        try {
            const userId = req.user.id; // Extract user ID from session or token
            const user = await User.findById(userId);

            if (!user) {
                return res.status(404).render('404', { message: 'User not found' });
            }

            res.render('profile', { user });
        } catch (err) {
            console.error('Error fetching profile:', err);
            res.status(500).send('Internal Server Error');
        }
    },

    // POST: Handle profile picture upload
    uploadProfilePic: async (req, res) => {
        try {
            const userId = req.user.id;

            // Check if a file is uploaded
            if (!req.files || !req.files.profilePic) {
                return res.status(400).send('No file uploaded');
            }

            const file = req.files.profilePic;

            // Validate file type (only images)
            const allowedExtensions = /png|jpeg|jpg/;
            const fileExtension = path.extname(file.name).toLowerCase();
            if (!allowedExtensions.test(fileExtension)) {
                return res.status(400).send('Invalid file type. Only PNG, JPG, and JPEG are allowed.');
            }

            // Save file to the uploads directory
            const uploadPath = path.join(__dirname, '../public/uploads', file.name);
            await file.mv(uploadPath);

            // Update the user's profile picture in the database
            const user = await User.findByIdAndUpdate(userId, { profilePic: file.name }, { new: true });

            res.redirect('/profile');
        } catch (err) {
            console.error('Error uploading profile picture:', err);
            res.status(500).send('Internal Server Error');
        }
    }
};
