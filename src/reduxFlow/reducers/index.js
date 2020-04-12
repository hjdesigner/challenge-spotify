
import { combineReducers } from 'redux';
import token from './token';
import loader from './loader';
import search from './search';
import album from './album';

export default combineReducers({
  token,
  loader,
  search,
  album,
});
