import { ADD_TITLE } from './actions';

export const addTitle = (title) => ({
  type: ADD_TITLE,
  payload: {
    text: title,
  },
});

export default addTitle;
