import createReducer from '../create-reducer';
import { TRUE_LOADER, FALSE_LOADER } from './actions';

const initialState = {
  status: true,
};

const token = createReducer(initialState, {
  [TRUE_LOADER]: (state, action) => ({
    ...state,
    status: action.payload.status,
  }),
  [FALSE_LOADER]: (state, action) => ({
    ...state,
    status: action.payload.status,
  }),
});

export default token;
