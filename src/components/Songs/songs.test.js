import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Songs from './index';
import Theme from '../../utils/theme';

describe('Albums Test Suite', () => {
  let wrapper, data;
  beforeEach(() => {
    data = {
      duration_ms: 266760,
      id: '0eRVgxQUB68Q1wKhMkp8yn',
      name: 'Tudo',
      preview_url: 'https://p.scdn.co/mp3-preview/9628b45a9e5469740266e078f0c8bf9f2a44cf75?cid=774b29d4f13844c495f206cafdad9c86',
      track_number: 13,
    };
    wrapper = mount(<Theme><Songs item={data} /></Theme>);
  });

  it('Should return one li', () => {
    expect(wrapper.find('li')).to.have.length(1);
  });
  it('Should return tree p', () => {
    expect(wrapper.find('p')).to.have.length(3);
  });
  it('Should contain track number equal to the past in the data track number field', () => {
    expect(wrapper.find('p').at(0).text()).to.equal('13.');
  });
  it('Should contain name equal to the past in the data name field', () => {
    expect(wrapper.find('p').at(1).text()).to.equal('Tudo');
  });
  it('Should contain duration_ms equal to the past in the data duration_ms field', () => {
    expect(wrapper.find('p').at(2).text()).to.equal('4:27');
  });
});