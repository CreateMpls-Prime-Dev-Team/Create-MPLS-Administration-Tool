const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  res.send("HELLO")
});

/**
 * POST route template
 */
router.post('/registration-code', (req, res) => {
  // POST route code here
});

module.exports = router;
