const mongoose = require('mongoose');

const AssignementSubmissionSchema = new mongoose.Schema({
    UploadedFiles: { type: File, required: true},
    comments: { type: String },
})


module.exports = mongoose.model('AssignementSubmission', AssignementSubmissionSchema);