const {
    searchTunes,
    searchArtists
} = require('../utils/config');

exports.apiHomePage = (req, res) => {
    res.render('homepage')
}

exports.apiSinglePage = (req, res) => {
    let counter = 0
    const newResults = []

    searchTunes('Happy')
    .then(result => {
        while (counter < 10) {
            newResults.push(result.result[counter])
            ++counter;
        }
        res.render('music', { newResults })
    })
    .catch(console.log)
}

exports.apiArtistsPage = (req, res) => {
    res.render('artists')
}

exports.apiAlbumPage = (req, res) => {
    res.render('albums')
}

