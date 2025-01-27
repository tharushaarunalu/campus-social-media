const Notification = require('../models/notificationModel');

// Get all notifications for the user
exports.getAllNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({ user: req.user._id });
        res.status(200).json(notifications);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

// Mark a notification as read
exports.markAsRead = async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.id);
        if (!notification) return res.status(404).send('Notification not found');

        notification.read = true;
        await notification.save();

        res.status(200).send('Notification marked as read');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

// Delete a notification
exports.deleteNotification = async (req, res) => {
    try {
        const notification = await Notification.findByIdAndDelete(req.params.id);
        if (!notification) return res.status(404).send('Notification not found');
        res.status(200).send('Notification deleted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};
