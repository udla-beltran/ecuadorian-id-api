// Import required node modules
const express = require('express');
const router = express.Router();
const path = require('path');

// Imports controller
const idController = require(path.join(__dirname, '../controller/id.controller'));

// @route   GET /api/id/verify/:id
// @desc    return if the person id is real
// @access  public
router.get('/verify/:id', idController.verify);

// Exports router
module.exports = router;
