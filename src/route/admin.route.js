const express = require('express');
const router = express.Router();

const { GetAdmin } = require('../controller/admin.controller');

// get all admin
router.get('/', GetAdmin);

module.exports = router;