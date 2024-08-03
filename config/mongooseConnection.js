const mongoose = require('mongoose');

// Connect to MongoDB
const db = mongoose.connect(process.env.MONGO_URL);

module.exports = db;