import {
  SEARCH,
  LOADING,
  ADD_SEARCH,
  RECENT,
  EMPTY,
} from './actions';

export const changeSearch = (text) => ({
  type: SEARCH,
  payload: {
    search: text,
  },
});
export const toggleLoading = (value) => ({
  type: LOADING,
  payload: {
    loading: value,
  },
});
export const toggleEmpty = (value) => ({
  type: EMPTY,
  payload: {
    empty: value,
    result: [],
  },
});
export const addSearch = (text, result) => ({
  type: ADD_SEARCH,
  payload: {
    search: text,
    result,
  },
});
export const addRecentSearch = (text, result) => ({
  type: RECENT,
  payload: {
    search: text,
    recent: result,
  },
});
