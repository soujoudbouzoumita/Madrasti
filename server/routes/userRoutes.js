// routes/userRoutes.js
const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('dotenv').config(); // Load environment variables

// Register
// Sign-Up
router.post('/sign-up', async (req, res) => {
  const { username, email, password, role } = req.body;

    try {
        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'User already exists' });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            role,
            name:username,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});
router.post('/signin', async (req, res) => {

    const { email, password } = req.body;
    console.log("Login request received:", req.body);

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log("Password valid:", isPasswordValid);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, role: user.role },  // Payload with user ID and role
            'yourSecretKey', // Secret key for JWT signing
            { expiresIn: '1h' } // Token expires in 1 hour
        );

        // Send token and role back to frontend
        res.status(200).json({
            message: "Login successful",
            token: token,
            role: user.role
        });
    } catch (error) {
        console.error("Error during login:", error); // Log the actual error
        res.status(500).json({ message: "Server error" });
    }
});
module.exports = router;

