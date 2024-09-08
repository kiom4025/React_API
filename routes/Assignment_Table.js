var express = require('express');
const { getAssignmentForTable } = require('../controller/Assignment-Controller');
var router = express.Router();


router.get('/', getAssignmentForTable);

module.exports = router;