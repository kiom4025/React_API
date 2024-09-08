var express = require('express');
const { createCourse, getCourseAssignmentForNavBar } = require('../controller/Course-Controller');
const { createAssignment } = require('../controller/Assignment-Controller');
var router = express.Router();

// app level routes level
router.use((req, res, next) => {
    console.log("Middleware call from Add-Modify Route");
    next();
});

router.get('/', getCourseAssignmentForNavBar);
router.post('/editCourses', createCourse);
router.post('/editAssignment', createAssignment);


module.exports = router;