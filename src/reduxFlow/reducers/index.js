
import { combineReducers } from 'redux';
import token from './token';
import loader from './loader';

export default combineReducers({
  token,
  loader,
});
