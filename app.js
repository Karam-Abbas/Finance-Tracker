const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const incomeRouter = require('./routes/income');
const expensesRouter = require('./routes/expenses');
const db = require('./config/mongooseConnection');
const dbgr = require("debug")("development:App.js");

const app = express();
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', indexRouter);
app.use('/income', incomeRouter);
app.use('/expenses', expensesRouter);

app.listen(3000, () => {
    dbgr('Server is running on port 3000');
});
