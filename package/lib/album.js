'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumsTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('./config.js');

var _utils = require('./utils');

/*eslint-disable */
var getAlbum = exports.getAlbum = function getAlbum(id) {
  return fetch(_config.API_URL + '/albums/' + id).then(_utils.toJSON);
};

var getAlbums = exports.getAlbums = function getAlbums(ids) {
  return fetch(_config.API_URL + '/albums/?ids=' + ids).then(_utils.toJSON);
};

var getAlbumsTracks = exports.getAlbumsTracks = function getAlbumsTracks(id) {
  return fetch(_config.API_URL + '/albums/' + id + '/tracks').then(_utils.toJSON);
};