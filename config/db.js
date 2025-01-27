const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Use environment variable for MongoDB URI
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // No need to specify deprecated options like `useNewUrlParser` or `useUnifiedTopology`
            serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
