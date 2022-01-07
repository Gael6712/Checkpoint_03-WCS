const db = require('../../config/dbConfig');

const checkTrack = async (trackId) => {
  try {
    const result = await db.query('SELECT * FROM track WHERE id = ?', [
      trackId,
    ]);
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

const findMany = async () => {
  try {
    const result = await db.query('SELECT * FROM track');
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

const findOne = async (trackId) => {
  try {
    const result = await db.query('SELECT * FROM track WHERE id = ?', [
      trackId,
    ]);
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

const create = async (newTrack) => {
  try {
    const { title, youtube_url, id_album } = newTrack;
    const insertTrack = await db.query(
      'INSERT INTO track (title, youtube_url, id_album) VALUES (?, ?, ?)',
      [title, youtube_url, id_album]
    );
    const insertedTrack = {
      id: insertTrack.insertId,
      title,
      youtube_url,
      id_album,
    };
    return insertedTrack;
  } catch (err) {
    throw new Error(err);
  }
};

const update = async (trackId, updatedInfo) => {
  try {
    await db.query('UPDATE track SET ? WHERE id = ?', [updatedInfo, trackId]);
    return updatedInfo;
  } catch (err) {
    throw new Error(err);
  }
};

const remove = async (trackId) => {
  try {
    await db.query('DELETE FROM track WHERE id = ?', [trackId]);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  checkTrack,
  findMany,
  findOne,
  create,
  update,
  remove,
};
