import createReducer from '../create-reducer';
import {
  SEARCH,
  ADD_SEARCH,
  LOADING,
  RECENT,
  EMPTY,
} from './actions';

const initialState = {
  search: '',
  result: [],
  recent: [],
  loading: false,
  empty: false,
};

const search = createReducer(initialState, {
  [SEARCH]: (state, action) => ({
    ...state,
    search: action.payload.search,
  }),
  [ADD_SEARCH]: (state, action) => ({
    ...state,
    search: action.payload.search,
    result: action.payload.result,
    recent: state.recent.concat(action.payload.result.map((item) => item)),
  }),
  [RECENT]: (state, action) => ({
    ...state,
    search: action.payload.search,
    result: action.payload.recent,
  }),
  [LOADING]: (state, action) => ({
    ...state,
    loading: action.payload.loading,
  }),
  [EMPTY]: (state, action) => ({
    ...state,
    empty: action.payload.empty,
    result: [],
  }),
});

export default search;
