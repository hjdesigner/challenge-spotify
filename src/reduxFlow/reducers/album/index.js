import createReducer from '../create-reducer';
import {
  ADD_COVER,
  VIEW_ALBUM,
  ADD_SONGS,
  RESET_ALBUM,
  ID_ALBUM,
  LOADER_ALBUM,
} from './actions';

const initialState = {
  status: false,
  album: {},
  songs: [],
  id: '',
  loading: true,
};

const album = createReducer(initialState, {
  [ADD_COVER]: (state, action) => ({
    ...state,
    album: action.payload.album,
  }),
  [ADD_SONGS]: (state, action) => ({
    ...state,
    songs: action.payload.songs,
  }),
  [VIEW_ALBUM]: (state, action) => ({
    ...state,
    status: action.payload.status,
  }),
  [RESET_ALBUM]: (state, action) => ({
    ...state,
    status: action.payload.status,
    album: action.payload.album,
    songs: action.payload.songs,
    id: action.payload.id,
    loading: action.payload.loading,
  }),
  [ID_ALBUM]: (state, action) => ({
    ...state,
    id: action.payload.id,
  }),
  [LOADER_ALBUM]: (state, action) => ({
    ...state,
    loading: action.payload.loading,
  }),
});

export default album;
