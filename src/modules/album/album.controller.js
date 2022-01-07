const {
  checkAlbum,
  findMany,
  findOne,
  findTracksOfAlbum,
  create,
  update,
  remove,
} = require('./album.model');

const getAlbums = async (req, res) => {
  try {
    const result = await findMany();
    res.json(result[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getOneAlbum = async (req, res) => {
  try {
    const existingAlbum = await checkAlbum(req.params.id);
    if (existingAlbum.length === 0) {
      res.status(404).send('Unable to retrieve this album');
    } else {
      const result = await findOne(req.params.id);
      res.json(result);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const getAllTracksOfAlbum = async (req, res) => {
  try {
    const existingAlbum = await checkAlbum(req.params.id);
    if (existingAlbum.length === 0) {
      res.status(404).send('Unable to retrieve this album');
    } else {
      const result = await findTracksOfAlbum(req.params.id);
      res.json(result);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const createAlbum = async (req, res) => {
  try {
    const existingAlbum = await checkAlbum(req.params.id);
    if (existingAlbum.length === 0) {
      res.status(404).send('Unable to retrieve this album');
    } else {
      const result = await create(req.body);
      res.json(201).json(result);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateAlbum = async (req, res) => {
  try {
    const existingAlbum = await checkAlbum(req.params.id);
    if (existingAlbum.length === 0) {
      res.status(404).send('Unable to retrieve this Album');
    } else {
      const result = await update(req.params.id, req.body);
      res.status(204).send('no content');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteAlbum = async (req, res) => {
  try {
    const existingAlbum = await checkAlbum(req.params.id);
    if (existingAlbum.length === 0) {
      res.status(404).send('Unable to retrieve this Album');
    } else {
      const result = await remove(req.params.id);
      res.status(204).send('no content');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAlbums,
  getOneAlbum,
  getAllTracksOfAlbum,
  createAlbum,
  updateAlbum,
  deleteAlbum,
};
