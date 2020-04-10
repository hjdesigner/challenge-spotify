import { ADD_TOKEN, ADD_STATUS_TOKEN } from './actions';

export const addToken = (id) => ({
  type: ADD_TOKEN,
  payload: {
    token: id,
  },
});
export const statusToken = (status) => ({
  type: ADD_STATUS_TOKEN,
  payload: {
    status,
  },
});
