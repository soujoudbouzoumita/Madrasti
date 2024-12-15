// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        enum: [0, 1, 2], // 0: User, 1: Moderator, 2: Admin
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

// Pre-save middleware to hash the password
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next(); // Only hash if password is new or modified

    try {
        const salt = await bcrypt.genSalt(10); // Generate salt
        this.password = await bcrypt.hash(this.password, salt); // Hash the password
        next();
    } catch (error) {
        next(error);
    }
});

const User = mongoose.model('User ', userSchema);

module.exports = User;