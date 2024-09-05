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
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
});

module.exports = mongoose.model('income',incomeSchema);