const { Double, Decimal128 } = require('mongodb');
const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    courseTitle: { type: String, unique: true},
    shortDescription: { type: String },
    description: { type: String },
    difficulty: { type: String },
    courseDuration: { type: String },
    languageSelection: { type: Array },
    skillscovered: { type: Array },
    createdBy: { type: String },
    classSchedule: { type: String },
    availableSlotDate: { type: Date },
    ratingStarValue: { type: Number },
    reviewCount: { type: Number },
    totalPrice: { type: Number },
    discountPercentage: { type: Number },
    courseThumnail: { type: String },
})


module.exports = mongoose.model('Courses', CourseSchema);