import createReducer from '../create-reducer';
import { ADD_TOKEN, ADD_STATUS_TOKEN } from './actions';

const initialState = {
  status: false,
  token: '',
};

const token = createReducer(initialState, {
  [ADD_TOKEN]: (state, action) => ({
    ...state,
    token: action.payload.token,
  }),
  [ADD_STATUS_TOKEN]: (state, action) => ({
    ...state,
    status: action.payload.status,
  }),
});

export default token;
