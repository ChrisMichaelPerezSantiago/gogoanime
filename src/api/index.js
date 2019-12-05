const express = require('express');
const routes = require('./routes/index');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'animeflv API - 👋🌎🌍🌏',
    entries: [
      {
        
      }
    ]
  });
});

router.use('/', routes);

module.exports = router;