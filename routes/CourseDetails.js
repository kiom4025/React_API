var express = require('express');
const { getAvailableCourseWithQuery } = require('../controller/Course-Controller');
var router = express.Router();

// app level routes level
router.use((req, res, next) => {
    console.log("Middleware call from Course Details Route");
    next();
});

router.get('/', getAvailableCourseWithQuery);

module.exports = router;