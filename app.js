const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require("./routes/index");
const incomeRouter = require("./routes/income");
const expensesRouter = require("./routes/expenses");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const cors = require('cors');
app.use(cors());


app.get('/',indexRouter);
app.get('/income',incomeRouter);
app.get('/expenses',expensesRouter);


app.listen("3000",()=>{
    console.log("Server is running on port 3000");
});


