const {
    searchTunes,
    searchArtists
} = require('../utils/config');

exports.apiHomePage = (req, res) => {
    res.render('homepage')
}

exports.apiSinglePage = (req, res) => {
    res.render('music')
}

exports.apiArtistsPage = (req, res) => {
    res.render('artists')
}

exports.apiAlbumPage = (req, res) => {
    res.render('albums')
}


