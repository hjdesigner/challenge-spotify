import React from 'react';
import { objectOf, any } from 'prop-types';
import styled from 'styled-components';

const Albums = ({ item }) => (
  <Element key={item.id}>
    <Figure>
      <Image src={item.images[1].url} alt={item.name} />
    </Figure>
    <Title>{item.name}</Title>
    <Artist>{item.artists[0].name}</Artist>
  </Element>
);

const Element = styled.li`
  margin-bottom: ${({ theme }) => theme.spaces.medium};
  width: 48%;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 17%;
  }
`;
const Figure = styled.figure`
  margin-bottom: ${({ theme }) => theme.spaces.small};
`;
const Image = styled.img`
  width: 100%;
`;
const Title = styled.h3`
  color: ${({ theme }) => theme.colors.ice};
  font-size: 1.8em;
  font-weight: 400;
  text-align: center;
  width: 100%;
`;
const Artist = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.4em;
  text-align: center;
  margin-top: ${({ theme }) => theme.spaces.small};
`;

Albums.defaultProps = {
  item: {},
};

Albums.propTypes = {
  item: objectOf(any),
};

export default Albums;
