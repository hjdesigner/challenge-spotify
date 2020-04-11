import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { TitleH1, TitleH2, TitleH3 } from './index';
import Theme from '../../utils/theme';

describe('Title Test Suite', () => {
  it('Should have an h1', () => {
    const wrapper = mount(<Theme><TitleH1 title="test" /></Theme>);
    expect(wrapper.find('h1')).to.have.lengthOf(1);
  });
  it('Should have an h1 with text equal test', () => {
    const wrapper = mount(<Theme><TitleH1 title="test" /></Theme>);
    expect(wrapper.find('h1').text()).to.equal('test');
  });

  it('Should have an h2', () => {
    const wrapper = mount(<Theme><TitleH2 title="test h2" /></Theme>);
    expect(wrapper.find('h2')).to.have.lengthOf(1);
  });
  it('Should have an h2 with text equal test', () => {
    const wrapper = mount(<Theme><TitleH2 title="test h2" /></Theme>);
    expect(wrapper.find('h2').text()).to.equal('test h2');
  });

  it('Should have an h3', () => {
    const wrapper = mount(<Theme><TitleH3 title="test h3" /></Theme>);
    expect(wrapper.find('h3')).to.have.lengthOf(1);
  });
  it('Should have an h3 with text equal test', () => {
    const wrapper = mount(<Theme><TitleH3 title="test h3" /></Theme>);
    expect(wrapper.find('h3').text()).to.equal('test h3');
  });
});
