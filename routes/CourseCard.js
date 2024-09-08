var express = require('express');
const { getAvailableCourseForCard } = require('../controller/Course-Controller');
var router = express.Router();


router.get('/', getAvailableCourseForCard);

module.exports = router;