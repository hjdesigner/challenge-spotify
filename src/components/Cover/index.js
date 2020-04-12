import React from 'react';
import { objectOf, any } from 'prop-types';
import styled from 'styled-components';

const Cover = ({ item }) => (
  <Container>
    <Image src={item.image} alt={item.title} />
    <Title>{item.title}</Title>
    <Artist>{item.artist}</Artist>
  </Container>
);

const Container = styled.aside`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    max-height: 390px;
    margin-right: ${({ theme }) => theme.spaces.bigLarge};
    width: 30%;
  }
`;
const Image = styled.img`
  margin-bottom: ${({ theme }) => theme.spaces.small};
  max-width: 300px;
  width: 100%;
`;
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.ice};
  font-size: 18px;
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


Cover.defaultProps = {
  item: {},
};

Cover.propTypes = {
  item: objectOf(any),
};

export default Cover;
