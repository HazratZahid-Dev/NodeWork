const express = require('express');
const router = express.Router();

const formcontroller = require('../controllers/formController');

router.get('/login', formcontroller.Login)

module.exports = router;