import { expect } from 'chai';
import deepfreeze from 'deep-freeze';
import loader from './index';
import { TRUE_LOADER, FALSE_LOADER } from './actions';

it('Should return loader with text equal false', () => {
  const before = deepfreeze({
    status: true,
  });
  const action = deepfreeze({
    type: TRUE_LOADER,
    payload: {
      status: false,
    },
  });
  const after = {
    status: false,
  };
  expect(loader(before, action)).to.be.deep.equal(after);
});
it('Should return the true status object if no action is passed', () => {
  const before = deepfreeze({
    status: true,
  });
  const action = deepfreeze({});
  const after = {
    status: true,
  };
  expect(loader(before, action)).to.be.deep.equal(after);
});