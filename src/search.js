/*eslint-disable */
import { API_URL } from './config'
import { toJSON } from './utils'

export const search = (query, type) => {

  return fetch(`${API_URL}/search?q=${query}&type=${type}`, {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        Authorization : 'Bearer ' + 'BQAqb1tIO4fLrvUHTeaFE-WyVw-0yXxhVkA3C8Bzezst5Syxxx4agarNpnFjq0m94Etvnk4ClSF2gF6iiSG4YsGa4dpAtQX7ok1hE3gx9CGZsgS4RrRq_bRhJ7v6zb_m0Z7N99sSu7DyLZ8n-dCaNqKpx6hQ'
    }}).then(toJSON)

}

export const searchArtists = (query) =>
  search(query, 'artist');

export const searchAlbums = (query) =>
  search(query, 'album');

export const searchTracks = (query) =>
  search(query, 'tracks');

export const searchPlaylists = (query) =>
  search(query, 'playlist');
