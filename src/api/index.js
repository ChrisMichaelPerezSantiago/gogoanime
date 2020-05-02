const express = require('express');
const routes = require('./routes/index');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'gogoanime API - 👋🌎🌍🌏',
    entries: [
      {
        "Search": "/api/v1/Search/:query",
        "AnimeEpisodeHandler": "/api/v1/AnimeEpisodeHandler/:id",
        "RecentReleaseEpisodes": "/api/v1/RecentReleaseEpisodes/:page",
        "RecentlyAddedSeries": "/api/v1/RecentlyAddedSeries",
        "OngoingSeries": "/api/v1/OngoingSeries",
        "Alphabet": "/api/v1/Alphabet/:letter/:page",
        "NewSeasons": "/api/v1/NewSeasons/:page",
        "Movies": "/api/v1/Movies/:page",
        "Popular": "/api/v1/Popular/:page",
        "Genre": "/api/v1/Genre/:genre/:page",
        "DecodeVidstreamingIframeURL": "/api/v1/DecodeVidstreamingIframeURL"
      }
    ]
  });
});

router.use('/', routes);

module.exports = router;