const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../helpers/path');

router.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, 'src', 'views', '404.html'));
});

module.exports = router;
