import React from 'react';
import { objectOf, any } from 'prop-types';
import styled from 'styled-components';

function millisToMinutesAndSeconds(millis) {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return `${minutes}:${(seconds < 10 ? '0' : '') + seconds}`;
}

const Songs = ({ item }) => (
  <Container>
    <Number>{`${item.track_number}.`}</Number>
    <Info>
      <Name>{item.name}</Name>
      <Time>{millisToMinutesAndSeconds(item.duration_ms)}</Time>
    </Info>
  </Container>
);

const Container = styled.li`
  align-items: center;
  display: flex;
  padding: ${({ theme }) => theme.spaces.small} 0;
  width: 100%;
`;
const Number = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.6em;
  font-weight: 400;
  margin-right: ${({ theme }) => theme.spaces.medium};
`;
const Info = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;
const Name = styled(Number)`
  color: ${({ theme }) => theme.colors.ice};
`;
const Time = styled(Number)``;

Songs.defaultProps = {
  item: {},
};

Songs.propTypes = {
  item: objectOf(any),
};

export default Songs;
