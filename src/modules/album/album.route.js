const albumRouter = require('express').Router();

const {
  getAlbums,
  getOneAlbum,
  getAllTracksOfAlbum,
  createAlbum,
  updateAlbum,
  deleteAlbum,
} = require('./album.controller');

albumRouter.get('/', getAlbums);
albumRouter.get('/:id', getOneAlbum);
albumRouter.get('/:id/tracks', getAllTracksOfAlbum);
albumRouter.post('/', createAlbum);
albumRouter.put('/:id', updateAlbum);
albumRouter.delete('/:id', deleteAlbum);

module.exports = albumRouter;
