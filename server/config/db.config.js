// config/db.config.js
const mongoose = require('mongoose');

const dbConfig = {
    url: 'mongodb://localhost:27017/your_database_name', // Change 'your_database_name' to your desired database name
};

const connectDB = async () => {
    try {
        await mongoose.connect(dbConfig.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = { connectDB };