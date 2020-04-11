import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Albums from './index';
import Theme from '../../utils/theme';

describe('Albums Test Suite', () => {
  let wrapper, data;

  beforeEach(() => {
    data = {
      "album_type" : "album",
      "artists" : [ 
        {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7Lvg39k5XgXevGR767ikYI",
          },
          "href" : "https://api.spotify.com/v1/artists/7Lvg39k5XgXevGR767ikYI",
          "id" : "7Lvg39k5XgXevGR767ikYI",
          "name" : "Dead Fish",
          "type" : "artist",
          "uri" : "spotify:artist:7Lvg39k5XgXevGR767ikYI",
        },
      ],
      "available_markets" : [ "AD", "AE", "AR", "AT", "AU", "BE", "BG", "BH", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JO", "JP", "KW", "LB", "LI", "LT", "LU", "LV", "MA", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "OM", "PA", "PE", "PH", "PL", "PS", "PT", "PY", "QA", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TN", "TR", "TW", "US", "UY", "VN", "ZA" ],
      "external_urls" : {
        "spotify" : "https://open.spotify.com/album/7bUuKrK0ksqlJ2oDYfo0N5",
      },
      "href" : "https://api.spotify.com/v1/albums/7bUuKrK0ksqlJ2oDYfo0N5",
      "id" : "7bUuKrK0ksqlJ2oDYfo0N5",
      "images" : [ 
        {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273f1252d4f09577afc734df228",
          "width" : 640,
        },
        {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02f1252d4f09577afc734df228",
          "width" : 300,
        },
        {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851f1252d4f09577afc734df228",
          "width" : 64,
        },
      ],
      "name" : "Zero e Um",
      "release_date" : "2004-04-26",
      "release_date_precision" : "day",
      "total_tracks" : 14,
      "type" : "album",
      "uri" : "spotify:album:7bUuKrK0ksqlJ2oDYfo0N5",
    };
    wrapper = mount(<Theme><Albums item={data} /></Theme>);
  });

  it('Should return one li', () => {
    expect(wrapper.find('li')).to.have.length(1);
  });
  it('Should contain image equal to the past in the data image field', () => {
    expect(wrapper.find('img').props().src).to.equal('https://i.scdn.co/image/ab67616d00001e02f1252d4f09577afc734df228')
  });
  it('It should return the alt of the image equal to the name passed in the data', () => {
    expect(wrapper.find('img').props().alt).to.equal('Zero e Um');
  });
  it('Should return an H3 title', () => {
    expect(wrapper.find('h3')).to.have.length(1)
  });
  it('You should return the tittle text equal to the name passed in the data', () => {
    expect(wrapper.find('h3').text()).to.equal('Zero e Um');
  });
  it('Should return an p', () => {
    expect(wrapper.find('p')).to.have.length(1)
  });
  it('You should return the artist text equal to the name artist passed in the data', () => {
    expect(wrapper.find('p').text()).to.equal('Dead Fish');
  });

});