const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
    topic: { type: String, unique: true },
    description: { type: String },
    dueDate: { type: Date },
})


module.exports = mongoose.model('Assignments', AssignmentSchema);