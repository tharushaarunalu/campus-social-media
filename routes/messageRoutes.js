const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController'); // Import message controller
const authMiddleware = require('../middleware/authMiddleware'); // Middleware for authentication

// GET: Fetch all messages for the user
router.get('/', authMiddleware, messageController.getAllMessages);

// POST: Send a message
router.post('/', authMiddleware, messageController.sendMessage);

// GET: Fetch a single conversation by ID
router.get('/:conversationId', authMiddleware, messageController.getConversationById);

module.exports = router;
