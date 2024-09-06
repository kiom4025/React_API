const mongoose = require('mongoose');

const userLoginSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    remember: { type: Boolean },
})


module.exports = mongoose.model('Users', userLoginSchema);