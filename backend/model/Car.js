const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    number_plate: { type: String, required: true },
    car_type: { type: String, required: true },
    user_id: { type: String, required: true }
});

const Car = mongoose.model('Car', CarSchema);

module.exports = {Car};
