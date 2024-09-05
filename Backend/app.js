require("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");
const cookieParser = require("cookie-parser");

const indexRouter = require("./routes/index");
const incomeRouter = require("./routes/income");
const expensesRouter = require("./routes/expenses");
const userRouter = require("./routes/user");
const db = require("./config/mongooseConnection");
const dbgr = require("debug")("development:App.js");

// Middleware
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/index", indexRouter);
app.use("/user", userRouter);
app.use("/income", incomeRouter);
app.use("/expenses", expensesRouter);

app.listen(3000, () => {
  dbgr("Server is running on port 3000");
});
