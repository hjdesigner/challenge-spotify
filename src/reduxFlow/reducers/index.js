
import { combineReducers } from 'redux';
import title from './title';
import token from './token';
import loader from './loader';

export default combineReducers({
  title,
  token,
  loader,
});
