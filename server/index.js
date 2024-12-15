const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { connectDB } = require('./config/db.config');
const User = require('./models/User');
const Message = require('./models/message');
const app = express();
const authRoutes=require('./routes/userRoutes')
const messagesRoutes=require('./routes/messagesRoutes')
const getUserRoutes=require('./routes/getusers')

app.use(cors());
app.use(express.json());

connectDB();
app.use('/api/users',authRoutes);
app.use('/api',messagesRoutes);
app.use('/api',getUserRoutes);
// // Sign-up route
// app.post('/api/users/signup', async (req, res) => {
//     const { username, email, password, role } = req.body;

//     try {
//         // Check if user already exists
//         const userExists = await User.findOne({ email });
//         if (userExists) return res.status(400).json({ message: 'User already exists' });

//         // Hash password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create new user
//         const newUser = new User({
//             role,
//             username,
//             email,
//             password: hashedPassword,
//         });

//         await newUser.save();
//         res.status(201).json({ message: 'User created successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// // Sign-in route
// app.post('/api/users/signin', async (req, res) => {
//     const { email, password } = req.body;
//     console.log("Login request received:", req.body);

//     try {
//         // Find user by email
//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: 'User not found' });

//         // Compare password
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         console.log("Password valid:", isPasswordValid);

//         if (!isPasswordValid) {
//             return res.status(401).json({ message: "Invalid credentials" });
//         }

//         // Generate JWT token
//         const token = jwt.sign(
//             { userId: user._id, role: user.role },  // Payload with user ID and role
//             'yourSecretKey', // Secret key for JWT signing
//             { expiresIn: '1h' } // Token expires in 1 hour
//         );

//         // Send token and role back to frontend
//         res.status(200).json({
//             message: "Login successful",
//             token: token,
//             role: user.role
//         });
//     } catch (error) {
//         console.error("Error during login:", error); // Log the actual error
//         res.status(500).json({ message: "Server error" });
//     }
// });


// Handle OPTIONS requests for CORS preflight
app.options('*', (req, res) => {
    res.sendStatus(200);
});

// Start server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
