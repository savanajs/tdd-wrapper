/*eslint-disable */
import { API_URL, HEADERS } from './config'
import { toJSON } from './utils'

export const search = (query, type) => {

  return fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADERS).then(toJSON)

}

export const searchArtists = (query) =>
  search(query, 'artist');

export const searchAlbums = (query) =>
  search(query, 'album');

export const searchTracks = (query) =>
  search(query, 'tracks');

export const searchPlaylists = (query) =>
  search(query, 'playlist');
