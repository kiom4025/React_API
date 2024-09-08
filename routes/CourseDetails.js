var express = require('express');
const { getAvailableCourse } = require('../controller/Course-Controller');
var router = express.Router();

// app level routes level
router.use((req, res, next) => {
    console.log("Middleware call from Course Details Route");
    next();
});

router.get('/', getAvailableCourse);

module.exports = router;