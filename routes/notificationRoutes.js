const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController'); // Import notification controller
const authMiddleware = require('../middleware/authMiddleware'); // Middleware for authentication

// GET: Fetch all notifications for the user
router.get('/', authMiddleware, notificationController.getAllNotifications);

// POST: Mark a notification as read
router.post('/:id/read', authMiddleware, notificationController.markAsRead);

// DELETE: Delete a notification
router.delete('/:id', authMiddleware, notificationController.deleteNotification);

module.exports = router;
