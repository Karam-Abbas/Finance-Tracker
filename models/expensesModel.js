const mongoose = require('mongoose');

const expensesSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxLength: 20
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength:30
    }
});

module.exports = mongoose.model('expenses',expensesSchema);