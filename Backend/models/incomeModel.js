const mongoose = require('mongoose');

const incomeSchema = mongoose.Schema({
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
    },
    sign:{
        type: String,
        default : '+'
    }
});

module.exports = mongoose.model('income',incomeSchema);