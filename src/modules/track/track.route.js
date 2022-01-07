const trackRouter = require('express').Router();

const {
  getTracks,
  getOneTrack,
  createTrack,
  updateTrack,
  deleteTrack,
} = require('./track.controller');

trackRouter.get('/', getTracks);
trackRouter.get('/:id', getOneTrack);
trackRouter.post('/', createTrack);
trackRouter.put('/:id', updateTrack);
trackRouter.delete('/:id', deleteTrack);

module.exports = trackRouter;
