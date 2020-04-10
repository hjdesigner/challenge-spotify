import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Title from './index';

describe('Title Test Suite', () => {
  it('Should have an h1', () => {
    const wrapper = mount(<Title title="test" />);
    expect(wrapper.find('h1')).to.have.lengthOf(1);
  });
  it('Should have an h1 with text equal test', () => {
    const wrapper = mount(<Title title="test" />);
    expect(wrapper.find('h1').text()).to.equal('test');
  });
});
