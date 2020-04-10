import { TRUE_LOADER, FALSE_LOADER } from './actions';

export const falseLoader = () => ({
  type: FALSE_LOADER,
  payload: {
    status: false,
  },
});
export const trueLoader = () => ({
  type: TRUE_LOADER,
  payload: {
    status: true,
  },
});
