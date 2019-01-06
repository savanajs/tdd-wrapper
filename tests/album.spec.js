/*eslint-disable */

import chai, { expect } from 'chai';
import { getAlbum, getAlbums, getAlbumsTracks } from '../src/album';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

sinonStubPromise(sinon);

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {

  let stubedFetch;
  let promise;

  beforeEach(() => {

    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();

  });

  afterEach(() => {

    stubedFetch.restore();

  });

  describe('smoke tests', () => {

    it('should have getAlbum method', () => {

      expect(getAlbum).to.exist;

    });

    it('should have getAlbumsTracks method', () => {

      expect(getAlbumsTracks).to.exist;

    });

  })

  describe('getAlbum', () => {

    it('should call fetch method', () => {

      const album = getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;

    });

    it('should call fetch with the correct URL', () => {

      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy')

    });

    it('should return the correct data from Promise', () => {
      promise.resolves({album: 'nome'});
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(album.resolveValue).to.be.eql({album: 'nome'});
    });

  });

  describe('getAlbums', () => {

    it('should call fetch method', () => {

      const albums = getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;

    });

    it('should call fetch with the correct URL', () => {

      const album = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy','4aawyAB9vmqN3uQ7FjRGTk']);
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk')

    });

    it('should return the correct data from Promise', () => {
      promise.resolves({album: 'nome'});
      const album = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy','4aawyAB9vmqN3uQ7FjRGTk']);
      expect(album.resolveValue).to.be.eql({album: 'nome'});
    });

  });

  describe('getAlbumsTracks', () => {

    it('should call fetch method', () => {

      const tracks = getAlbumsTracks();
      expect(stubedFetch).to.have.been.calledOnce;

    });

    it('should call fetch with the correct URL', () => {

      const tracks = getAlbumsTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks')

    });

    it('should return the correct data from Promise', () => {
      promise.resolves({album: 'nome'});
      const tracks = getAlbumsTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(tracks.resolveValue).to.be.eql({album: 'nome'});
    });

  });

});
