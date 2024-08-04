const mongoose = require("mongoose");

// Connect to MongoDB

try {
  mongoose
    .connect("mongodb://localhost:27017/FinanceTracker")
    .catch((e) => console.log("error connecting to MongoDB" + e.message))
    .then(() => console.log("Connected to MongoDB"));
} catch (e) {
  console.log(e);
}

module.exports = mongoose.connection;
