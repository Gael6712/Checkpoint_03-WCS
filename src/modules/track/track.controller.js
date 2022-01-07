const {
  checkTrack,
  findMany,
  findOne,
  create,
  update,
  remove,
} = require('./track.model');

const getTracks = async (req, res) => {
  try {
    const result = await findMany();
    res.json(result[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getOneTrack = async (req, res) => {
  try {
    const existingTrack = await checkTrack(req.params.id);
    if (existingTrack.length === 0) {
      res.status(404).send('Unable to retrieve this track');
    } else {
      const result = await findOne(req.params.id);
      res.json(result);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const createTrack = async (req, res) => {
  try {
    const existingTrack = await checkTrack(req.params.id);
    if (existingTrack.length === 0) {
      res.status(404).send('Unable to retrieve this track');
    } else {
      const result = await create(req.body);
      res.json(201).json(result);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateTrack = async (req, res) => {
  try {
    const existingTrack = await checkTrack(req.params.id);
    if (existingTrack.length === 0) {
      res.status(404).send('Unable to retrieve this track');
    } else {
      const result = await update(req.params.id, req.body);
      res.status(204).send('no content');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteTrack = async (req, res) => {
  try {
    const existingTrack = await checkTrack(req.params.id);
    if (existingTrack.length === 0) {
      res.status(404).send('Unable to retrieve this track');
    } else {
      const result = await remove(req.params.id);
      res.status(204).send('no content');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getTracks,
  getOneTrack,
  createTrack,
  updateTrack,
  deleteTrack,
};
