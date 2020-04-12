import { expect } from 'chai';
import deepfreeze from 'deep-freeze';
import album from './index';
import {
  ADD_COVER,
  VIEW_ALBUM,
  ADD_SONGS,
  RESET_ALBUM,
  ID_ALBUM,
  LOADER_ALBUM,
  ADD_AUDIO,
} from './actions';

it('Should return the album equal to the past object', () => {
  const before = deepfreeze({
    status: false,
    album: {},
    songs: [],
    id: '',
    loading: true,
    audio: '',
  });
  const action = deepfreeze({
    type: ADD_COVER,
    payload: {
      album: {
        image: 'https://i.scdn.co/image/ab67616d00001e02c8a11e48c91a982d086afc69',
        title: 'Led Zeppelin IV (Deluxe Edition; Remaster)',
        artist: 'Led Zeppelin',
      },
    },
  });
  const after = {
    status: false,
    album: {
      image: 'https://i.scdn.co/image/ab67616d00001e02c8a11e48c91a982d086afc69',
      title: 'Led Zeppelin IV (Deluxe Edition; Remaster)',
      artist: 'Led Zeppelin',
    },
    songs: [],
    id: '',
    loading: true,
    audio: '',
  };
  expect(album(before, action)).to.be.deep.equal(after);
});
it('Should return status with text equal true', () => {
  const before = deepfreeze({
    status: false,
    album: {},
    songs: [],
    id: '',
    loading: true,
    audio: '',
  });
  const action = deepfreeze({
    type: VIEW_ALBUM,
    payload: {
      status: true,
    },
  });
  const after = {
    status: true,
    album: {},
    songs: [],
    id: '',
    loading: true,
    audio: '',
  };
  expect(album(before, action)).to.be.deep.equal(after);
});
it('Should return the songs equal to the past object', () => {
  const before = deepfreeze({
    status: false,
    album: {},
    songs: [],
    id: '',
    loading: true,
    audio: '',
  });
  const action = deepfreeze({
    type: ADD_SONGS,
    payload: {
      songs: [
        {
          duration_ms: 266760,
          id: '0eRVgxQUB68Q1wKhMkp8yn',
          name: 'Tudo',
          preview_url: 'https://p.scdn.co/mp3-preview/9628b45a9e5469740266e078f0c8bf9f2a44cf75?cid=774b29d4f13844c495f206cafdad9c86',
          track_number: 13,
        },
        {
          duration_ms: 266760,
          id: '1eRVgxQUB68Q1wKhMkp8yn',
          name: 'Zero e um',
          preview_url: 'https://p.scdn.co/mp3-preview/9628b45a9e5469740266e078f0c8bf9f2a44cf75?cid=774b29d4f13844c495f206cafdad9c86',
          track_number: 14,
        },
      ]
    },
  });
  const after = {
    status: false,
    album: {},
    songs: [
      {
        duration_ms: 266760,
        id: '0eRVgxQUB68Q1wKhMkp8yn',
        name: 'Tudo',
        preview_url: 'https://p.scdn.co/mp3-preview/9628b45a9e5469740266e078f0c8bf9f2a44cf75?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 13,
      },
      {
        duration_ms: 266760,
        id: '1eRVgxQUB68Q1wKhMkp8yn',
        name: 'Zero e um',
        preview_url: 'https://p.scdn.co/mp3-preview/9628b45a9e5469740266e078f0c8bf9f2a44cf75?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 14,
      },
    ],
    id: '',
    loading: true,
    audio: '',
  };
  expect(album(before, action)).to.be.deep.equal(after);
});
it('Should return the state of the empty album if it has any value', () => {
  const before = deepfreeze({
    status: true,
    album: {},
    songs: [
      {
        duration_ms: 266760,
        id: '0eRVgxQUB68Q1wKhMkp8yn',
        name: 'Tudo',
        preview_url: 'https://p.scdn.co/mp3-preview/9628b45a9e5469740266e078f0c8bf9f2a44cf75?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 13,
      },
      {
        duration_ms: 266760,
        id: '1eRVgxQUB68Q1wKhMkp8yn',
        name: 'Zero e um',
        preview_url: 'https://p.scdn.co/mp3-preview/9628b45a9e5469740266e078f0c8bf9f2a44cf75?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 14,
      },
    ],
    id: '',
    loading: true,
    audio: '',
  });
  const action = deepfreeze({
    type: RESET_ALBUM,
    payload: {
      status: false,
      album: {},
      songs: [],
      id: '',
      loading: true,
      audio: '',
    },
  });
  const after = {
    status: false,
    album: {},
    songs: [],
    id: '',
    loading: true,
    audio: '',
  };
  expect(album(before, action)).to.be.deep.equal(after);
});
it('Should return id with text equal asdc548aqwd$', () => {
  const before = deepfreeze({
    status: false,
    album: {},
    songs: [],
    id: '',
    loading: true,
    audio: '',
  });
  const action = deepfreeze({
    type: ID_ALBUM,
    payload: {
      id: 'asdc548aqwd$',
    },
  });
  const after = {
    status: false,
    album: {},
    songs: [],
    id: 'asdc548aqwd$',
    loading: true,
    audio: '',
  };
  expect(album(before, action)).to.be.deep.equal(after);
});
it('Should return loading with value equal false', () => {
  const before = deepfreeze({
    status: false,
    album: {},
    songs: [],
    id: '',
    loading: true,
    audio: '',
  });
  const action = deepfreeze({
    type: LOADER_ALBUM,
    payload: {
      loading: false,
    },
  });
  const after = {
    status: false,
    album: {},
    songs: [],
    id: '',
    loading: false,
    audio: '',
  };
  expect(album(before, action)).to.be.deep.equal(after);
});
it('Should return audio with value equal abc', () => {
  const before = deepfreeze({
    status: false,
    album: {},
    songs: [],
    id: '',
    loading: true,
    audio: '',
  });
  const action = deepfreeze({
    type: ADD_AUDIO,
    payload: {
      audio: 'abc',
    },
  });
  const after = {
    status: false,
    album: {},
    songs: [],
    id: '',
    loading: true,
    audio: 'abc',
  };
  expect(album(before, action)).to.be.deep.equal(after);
});