const apiRouter = require('express').Router();
const { apiHomePage, apiSinglePage, apiArtistsPage, apiAlbumPage } = require('../controllers/controllers')

apiRouter.get('/', apiHomePage)

apiRouter.get('/singles', apiSinglePage)
apiRouter.get('/artists', apiArtistsPage)
apiRouter.get('/albums', apiAlbumPage)


module.exports = apiRouter;

