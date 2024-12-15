const express = require('express');
const Message = require('../models/message'); // Adjust the path as necessary
const authenticateToken = require('../middleware/authMiddleware'); // Adjust the path as necessary
const router = express.Router();

// Send a message
router.post('/send', authenticateToken, async (req, res) => {
    const { receiverId, text } = req.body; // Only receiverId and text are needed
    console.log('User Info:', req.user); 
    try {
        const senderId = req.user.userId; // Get senderId from the authenticated user
        const message = new Message({ sender: senderId, receiver: receiverId, text });
        await message.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

// Get messages for a user
router.get('/messages', authenticateToken, async (req, res) => {
    const userId = req.user.userId; // Get userId from the authenticated user

    try {
        const messages = await Message.find({ receiver: userId,}).populate('sender', 'name');
        res.status(200).json(messages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve messages' });
    }
});

module.exports = router;