var express = require('express');
const { getCourse, createCourse } = require('../controller/Courses');
var router = express.Router();


router.get('/',getCourse);
router.post('/',createCourse);

module.exports = router;