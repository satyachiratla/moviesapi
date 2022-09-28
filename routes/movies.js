const express = require('express');
const moviesController = require('../controllers/movies');

const router = express.Router();

router.get('/getmovies', moviesController.getmovies);
router.post('/postmovies', moviesController.postmovies);

module.exports = router;