var express = require('express');
const { getAllusers, createUser } = require('../controller/User-controller');
var router = express.Router();


router.get('/', getAllusers);
router.post('/', createUser);

module.exports = router;