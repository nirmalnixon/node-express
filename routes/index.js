const express = require('express');
const router = express.Router();

// Root route
router.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// About route
router.get('/about', (req, res) => {
  res.send('About Us');
});

router.post

module.exports = router;
