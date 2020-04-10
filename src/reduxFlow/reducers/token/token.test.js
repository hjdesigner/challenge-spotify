import { expect } from 'chai';
import deepfreeze from 'deep-freeze';
import token from './index';
import { ADD_TOKEN, ADD_STATUS_TOKEN } from './actions';

it('Should return token with text equal 1234', () => {
  const before = deepfreeze({
    status: false,
    token: '',
  });
  const action = deepfreeze({
    type: ADD_TOKEN,
    payload: {
      token: '1234',
    },
  });
  const after = {
    status: false,
    token: '1234',
  };
  expect(token(before, action)).to.be.deep.equal(after);
});
it('Should return the empty token object if no action is passed', () => {
  const before = deepfreeze({
    status: false,
    token: '',
  });
  const action = deepfreeze({});
  const after = {
    status: false,
    token: '',
  };
  expect(token(before, action)).to.be.deep.equal(after);
});
it('Should return status token with text equal true', () => {
  const before = deepfreeze({
    status: false,
    token: ''
  });
  const action = deepfreeze({
    type: ADD_STATUS_TOKEN,
    payload: {
      status: true,
    },
  });
  const after = {
    status: true,
    token: '',
  };
  expect(token(before, action)).to.be.deep.equal(after);
});
