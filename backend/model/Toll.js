const mongoose = require('mongoose');

const TollSchema = new mongoose.Schema({
    car_type: { type: String, required: true },
    amount: { type: Number, required: true }
});

const Toll = mongoose.model('Toll', TollSchema);

module.exports = {Toll};
