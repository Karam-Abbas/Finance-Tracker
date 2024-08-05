const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");
// Connect to MongoDB

try {
  mongoose
    .connect("mongodb://localhost:27017/FinanceTracker")
    .catch((e) => dbgr("Error connecting to MongoDB" + e.message))
    .then(() => dbgr("Connected to MongoDB"));
} catch (e) {
  dbgr(e);
}

module.exports = mongoose.connection;
