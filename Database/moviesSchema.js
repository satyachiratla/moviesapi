const mongoose = require('mongoose');

const Movies = mongoose.Schema({
    title: { type: String, required: true },
    contentPlot: { type: String, required: true },
    releaseDate: { type: String, required: true }
})

module.exports = mongoose.model('movies', Movies);