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
        default: Date.now
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        maxLength:30
    },
    sign:{
        type: String,
        default : '-'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
});

module.exports = mongoose.model('expenses',expensesSchema);