var express = require('express');
const { getAvailableCourse } = require('../controller/Course-Controller');
var router = express.Router();


router.get('/', getAvailableCourse);

module.exports = router;