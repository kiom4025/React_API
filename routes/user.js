var express = require('express');
const { getAllusers, createUser } = require('../controller/User-controller');
var router = express.Router();

// app level routes level
router.use((req, res, next) => {
    console.log("Middleware call from User Route");
    next();
});

router.get('/', getAllusers);
router.post('/', createUser);

module.exports = router;