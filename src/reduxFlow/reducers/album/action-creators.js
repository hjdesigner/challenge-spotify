import {
  ADD_COVER,
  VIEW_ALBUM,
  ADD_SONGS,
  RESET_ALBUM,
  ID_ALBUM,
  LOADER_ALBUM,
  ADD_AUDIO,
} from './actions';

export const addCover = (value) => ({
  type: ADD_COVER,
  payload: {
    album: value,
  },
});
export const addSongs = (value) => ({
  type: ADD_SONGS,
  payload: {
    songs: value,
  },
});
export const resetAlbum = () => ({
  type: RESET_ALBUM,
  payload: {
    status: false,
    album: {},
    songs: [],
    id: '',
    loading: true,
  },
});
export const toggleViewAlbum = (value) => ({
  type: VIEW_ALBUM,
  payload: {
    status: value,
  },
});
export const toggleLoadingAlbum = (value) => ({
  type: LOADER_ALBUM,
  payload: {
    loading: value,
  },
});
export const addIdAlbum = (value) => ({
  type: ID_ALBUM,
  payload: {
    id: value,
  },
});
export const addAudio = (value) => ({
  type: ADD_AUDIO,
  payload: {
    audio: value,
  },
});
