/*eslint-disable */

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import { search, searchArtists, searchAlbums, searchTracks, searchPlaylists } from '../src/search';

describe('Spotify Wrapper', () => {

  let fetchStub;
  let promise;

  beforeEach(() => {

    fetchStub = sinon.stub(global, 'fetch');
    promise = fetchStub.returnsPromise();

  });

  afterEach(() => {

    fetchStub.restore();

  });

  describe('smoke tests', () => {

    // search (generico) - + de 1 tipo

    it('should exist the search method', () => {

      expect(search).to.exist;

    });

    it('should exist the searchArtists method', () => {

      expect(searchArtists).to.exist;

    });

    it('should exist the searchAlbums method', () => {

      expect(searchAlbums).to.exist;

    });

    it('should exist the searchTracks method', () => {

      expect(searchTracks).to.exist;

    });

    it('should exist the searchPlaylists method', () => {

      expect(searchPlaylists).to.exist;

    });

  });

  describe('Generic Search', () => {

    it('should call fetch function', () => {

      const artists = search();
      expect(fetchStub).to.have.been.calledOnce;

    });

    it('should call fetch with the correct url', () => {

      context('passing one type', () => {

        const artists = search("incubus", "artist");

        expect(fetchStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=incubus&type=artist')

        const albums = search("incubus", "album");

        expect(fetchStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=incubus&type=album')

      });

      context('passing more than one type', () => {

        const artistsAndAlbums = search("incubus", ["artist", "album"]);

        expect(fetchStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=incubus&type=artist,album')

      })

    });

    it("Should return the JSON Data from the promise", () => {

      promise.resolves({body: 'json'});
      const artists = search("Incubus", "artist");

      // .resolveValue => VAlor resovido da promise
      expect(artists.resolveValue).to.be.eql({body: 'json'});

    })

  });

  describe('SearchArtists', () => {

    it('should call fetch function', () => {

      const artists = searchArtists('Incubus');
      expect(fetchStub).to.have.been.calledOnce;

    });

    it('should call fetch with the correct URL', () => {

      const artists = searchArtists("Incubus");
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

    });

  });

  describe('SearchAlbums', () => {

    it('should call fetch function', () => {

      const albums = searchAlbums('Incubus');
      expect(fetchStub).to.have.been.calledOnce;

    });

    it('should call fetch with the correct URL', () => {

      const albums = searchAlbums("Incubus");
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

    });

  });

  describe('searchTracks', () => {

    it('should call fetch function', () => {

      const albums = searchTracks('Incubus');
      expect(fetchStub).to.have.been.calledOnce;

    });

    it('should call fetch with the correct URL', () => {

      const albums = searchTracks("Incubus");
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=tracks');

    });

  });

  describe('searchPlaylists', () => {

    it('should call fetch function', () => {

      const albums = searchPlaylists('Incubus');
      expect(fetchStub).to.have.been.calledOnce;

    });

    it('should call fetch with the correct URL', () => {

      const albums = searchPlaylists("Incubus");
      expect(fetchStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

    });

  });

});
