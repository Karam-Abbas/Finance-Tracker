const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .catch((err) => {
    dbgr("Error connecting to MongoDB", err);
  })
  .then(() => {
    dbgr("Connected to MongoDB");
  });

module.exports = mongoose.connection;
