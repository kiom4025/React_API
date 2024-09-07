const mongoose = require('mongoose');

const AssignementSubmissionSchema = new mongoose.Schema({
    UploadedFiles: { type: String, required: true},
    comments: { type: String },
})


module.exports = mongoose.model('AssignementSubmission', AssignementSubmissionSchema);