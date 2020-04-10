import createReducer from '../create-reducer';
import { ADD_TITLE } from './actions';

const initialState = {
  title: '',
};

const title = createReducer(initialState, {
  [ADD_TITLE]: (state, action) => ({
    ...state,
    title: action.payload.text,
  }),
});

export default title;
