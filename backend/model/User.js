const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    balance: { type: Number, default: 0 } // Assuming balance starts from 0
});

const User = mongoose.model('User', UserSchema);

module.exports = {User};
