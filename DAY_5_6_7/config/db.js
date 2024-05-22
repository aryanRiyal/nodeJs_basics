const mongoose = require('mongoose');

// Load environment variables from .env file
require('dotenv').config();

// MongoDB connection URI from environment variables
const mongoURI = process.env.MONGO_URI_LOCAL;

// Function to connect to MongoDB
const connectDB = async () => {
try {
    // Establish connection to MongoDB
    await mongoose.connect(mongoURI, {
      // These options are no longer necessary in Mongoose 6.x and later
      // useNewUrlParser: true,
      // useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        // Exit process with failure
        process.exit(1);
    }
};

// Event listeners for MongoDB connection events
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from MongoDB');
});

// Function to gracefully close the MongoDB connection
const closeDB = async () => {
    try {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
    } catch (err) {
    console.error('Error closing MongoDB connection:', err.message);
    }
};

// Export the connect and close functions
module.exports = {
    connectDB,
    closeDB,
};