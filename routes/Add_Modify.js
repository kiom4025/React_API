var express = require('express');
const { createCourse, getCourseAssignmentForNavBar } = require('../controller/Course-Controller');
const { createAssignment } = require('../controller/Assignment-Controller');
var router = express.Router();
// editCourses
// editAssignment

router.get('/', getCourseAssignmentForNavBar);
router.post('/editCourses', createCourse);
router.post('/editAssignment', createAssignment);


module.exports = router;