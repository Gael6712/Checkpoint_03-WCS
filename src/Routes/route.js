const trackRouter = require('../modules/track/track.route');
const albumRouter = require('../modules/album/album.route');

module.exports = (app) => {
  app.use('/api/albums', albumRouter);
  app.use('/api/tracks', trackRouter);
};
