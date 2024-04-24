const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    trans_id: { type: String, required: true },
    date: { type: Date, default: Date.now },
    time: { type: String, required: true },
    amount: { type: Number, required: true },
    location: { type: String, required: true },
    number_plate: { type: String, required: true }
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = {Transaction};
