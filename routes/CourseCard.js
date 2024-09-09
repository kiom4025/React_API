var express = require('express');
const { getAvailableCourseForCard } = require('../controller/Course-Controller');
const { authroziedRole } = require('../controller/authorizeRole');
var router = express.Router();

// app level routes level
router.use((req, res, next) => {
    console.log("Middleware call from Course Card Route");
    next();
});

router.get('/', getAvailableCourseForCard);

module.exports = router;