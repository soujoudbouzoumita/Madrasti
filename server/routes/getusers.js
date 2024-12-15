const express = require('express');
const User = require('../models/User'); // Adjust the path as necessary
const authenticateToken = require('../middleware/authMiddleware'); // Adjust the path as necessary
const router = express.Router();
// Get users based on the logged-in user's role
router.get('/users', authenticateToken, async (req, res) => {
    try {
        let users;

        if (req.user.role === 1) {
            // If the logged-in user has role 1, return users with role 2
            users = await User.find({ role: 2 }, 'name role');
        } else if (req.user.role === 2) {
            // If the logged-in user has role 2, return users with role 1
            users = await User.find({ role: 1 }, 'name role');
        } else {
            return res.status(403).json({ message: 'Access denied' }); // If the user has a role that is not 1 or 2
        }

        // Send the users with their usernames and roles
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
});
module.exports = router;