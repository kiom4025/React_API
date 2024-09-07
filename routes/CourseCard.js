var express = require('express');
const { getAvailableCourseForCard, createCourse } = require('../controller/Course-Controller');
var router = express.Router();


router.get('/', getAvailableCourseForCard);
router.post('/', createCourse); // this will be moved into the course form route

module.exports = router;