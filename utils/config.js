const LastFM = require('last-fm')
const apiKey = 'cd17d4bc2bd1ecf4e43bcb229b2211ac';

const lastfm = new LastFM(apiKey, { userAgent: 'localhost:8000/api' })

const searchTunes = (q) => {
    return lastfm.trackSearch({ q }, (err, data) => {
        if (err) console.error(err)
        else console.log(data)
    })
}

const searchArtists = (name) => {
    return lastfm.artistInfo({ name }, (err, data) => {
        if (err) console.log(err)
        else console.log(data)
    })
}


module.exports = {
    searchTunes,
    searchArtists
}