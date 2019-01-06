/*eslint-disable */
import { API_URL } from './config.js';
import { toJSON } from './utils';

export const getAlbum = id =>
  fetch(`${API_URL}/albums/${id}`)
  .then(toJSON)

export const getAlbums = ids =>
  fetch(`${API_URL}/albums/?ids=${ids}`)
  .then(toJSON)

export const getAlbumsTracks = id =>
  fetch(`${API_URL}/albums/${id}/tracks`)
  .then(toJSON)
