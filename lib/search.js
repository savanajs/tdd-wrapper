'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchAlbums = exports.searchArtists = exports.search = undefined;

var _config = require('./config');

var _utils = require('./utils');

/*eslint-disable */
var search = exports.search = function search(query, type) {

  return fetch(_config.API_URL + '/search?q=' + query + '&type=' + type, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + 'BQAqb1tIO4fLrvUHTeaFE-WyVw-0yXxhVkA3C8Bzezst5Syxxx4agarNpnFjq0m94Etvnk4ClSF2gF6iiSG4YsGa4dpAtQX7ok1hE3gx9CGZsgS4RrRq_bRhJ7v6zb_m0Z7N99sSu7DyLZ8n-dCaNqKpx6hQ'
    } }).then(_utils.toJSON);
};

var searchArtists = exports.searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};

var searchAlbums = exports.searchAlbums = function searchAlbums(query) {
  return search(query, 'album');
};

var searchTracks = exports.searchTracks = function searchTracks(query) {
  return search(query, 'tracks');
};

var searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};