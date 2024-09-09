var express = require('express');
const { getAllusers, createUser } = require('../controller/User-controller');
const { authroziedRole } = require('../controller/authorizeRole');
var router = express.Router();

// app level routes level
router.use((req, res, next) => {
    console.log("Middleware call from User Route");
    next();
});

router.get('/', getAllusers);
router.post('/', authroziedRole('admin'), createUser);

module.exports = router;