const db = require('../../config/dbConfig');

const checkAlbum = async (albumId) => {
  try {
    const result = await db.query('SELECT * FROM album WHERE id = ?', [
      albumId,
    ]);
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

const findMany = async () => {
  try {
    const result = await db.query('SELECT * FROM album');
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

const findOne = async (albumId) => {
  try {
    const result = await db.query('SELECT * FROM album WHERE id = ?', [
      albumId,
    ]);
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

const findTracksOfAlbum = async (albumId) => {
  try {
    const result = await db.query(
      'SELECT album.title, genre, picture, artist, track.title FROM track JOIN album ON album.id = track.id_album WHERE album.id = ?',
      [albumId]
    );
    return result[0];
  } catch (err) {
    throw new Error(err);
  }
};

const create = async (newAlbum) => {
  try {
    const { title, genre, picture, artist } = newAlbum;
    const insertAlbum = await db.query(
      'INSERT INTO album (title, genre, picture, artist) VALUES (?, ?, ?, ?)',
      [title, genre, picture, artist]
    );
    const insertedAlbum = {
      id: insertAlbum.insertId,
      title,
      genre,
      picture,
      artist,
    };
    return insertedAlbum;
  } catch (err) {
    throw new Error(err);
  }
};

const update = async (albumId, updatedInfo) => {
  try {
    await db.query('UPDATE album SET ? WHERE id = ?', [updatedInfo, albumId]);
    return updatedInfo;
  } catch (err) {
    throw new Error(err);
  }
};

const remove = async (albumId) => {
  try {
    await db.query('DELETE FROM album WHERE id = ?', [albumId]);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  checkAlbum,
  findMany,
  findOne,
  findTracksOfAlbum,
  create,
  update,
  remove,
};
