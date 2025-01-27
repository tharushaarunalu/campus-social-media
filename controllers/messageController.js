const Message = require('../models/messageModel');

// Get all messages for the user
exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find({ recipient: req.user._id }).populate('sender', 'name');
        res.status(200).json(messages);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

// Send a message
exports.sendMessage = async (req, res) => {
    try {
        const { recipientId, content } = req.body;
        const message = new Message({ sender: req.user._id, recipient: recipientId, content });
        await message.save();
        res.status(201).json(message);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

// Get a single conversation by ID
exports.getConversationById = async (req, res) => {
    try {
        const messages = await Message.find({ conversationId: req.params.conversationId }).populate('sender recipient', 'name');
        res.status(200).json(messages);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};
