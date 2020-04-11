
import { combineReducers } from 'redux';
import token from './token';
import loader from './loader';
import search from './search';

export default combineReducers({
  token,
  loader,
  search,
});
