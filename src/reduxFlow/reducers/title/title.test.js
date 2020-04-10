import { expect } from 'chai';
import deepfreeze from 'deep-freeze';
import title from './index';
import { ADD_TITLE } from './actions';

it('Should return title with text equal Portugal', () => {
  const before = deepfreeze({
    title: '',
  });
  const action = deepfreeze({
    type: ADD_TITLE,
    payload: {
      text: 'Portugal',
    },
  });
  const after = {
    title: 'Portugal',
  };
  expect(title(before, action)).to.be.deep.equal(after);
});
it('Should return the empty title object if no action is passed', () => {
  const before = deepfreeze({
    title: '',
  });
  const action = deepfreeze({});
  const after = {
    title: '',
  };
  expect(title(before, action)).to.be.deep.equal(after);
});

