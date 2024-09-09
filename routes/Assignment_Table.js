var express = require('express');
const { getAssignmentForTable } = require('../controller/Assignment-Controller');
const { authroziedRole } = require('../controller/authorizeRole');
var router = express.Router();

// app level routes level
router.use((req, res, next) => {
    console.log("Middleware call from Assignment Route");
    next();
});

router.get('/', getAssignmentForTable);

module.exports = router;