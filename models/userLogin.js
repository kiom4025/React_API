const mongoose = require('mongoose');

const userLoginSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    phone: { type: String },
    agreement: { type: Boolean },
    email: { type: String },
})


module.exports = mongoose.model('Users', userLoginSchema);