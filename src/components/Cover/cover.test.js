import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Cover from './index';
import Theme from '../../utils/theme';

describe('Albums Test Suite', () => {
  let wrapper, data;
  beforeEach(() => {
    data = {
      image: 'https://i.scdn.co/image/ab67616d00001e02c8a11e48c91a982d086afc69',
      title: 'Led Zeppelin IV (Deluxe Edition; Remaster)',
      artist: 'Led Zeppelin',
    };
    wrapper = mount(<Theme><Cover item={data} /></Theme>);
  });

  it('Should return one aside', () => {
    expect(wrapper.find('aside')).to.have.length(1);
  });
  it('Should return one img', () => {
    expect(wrapper.find('img')).to.have.length(1);
  });
  it('Should return one h2', () => {
    expect(wrapper.find('h2')).to.have.length(1);
  });
  it('Should return one p', () => {
    expect(wrapper.find('p')).to.have.length(1);
  });
  it('Should contain image equal to the past in the data image field', () => {
    expect(wrapper.find('img').props().src).to.equal('https://i.scdn.co/image/ab67616d00001e02c8a11e48c91a982d086afc69')
  });
  it('It should return the alt of the image equal to the name passed in the data', () => {
    expect(wrapper.find('img').props().alt).to.equal('Led Zeppelin IV (Deluxe Edition; Remaster)');
  });
  it('You should return the title text equal to the name passed in the data', () => {
    expect(wrapper.find('h2').text()).to.equal('Led Zeppelin IV (Deluxe Edition; Remaster)');
  });
  it('You should return the artist text equal to the name artist passed in the data', () => {
    expect(wrapper.find('p').text()).to.equal('Led Zeppelin');
  });
});