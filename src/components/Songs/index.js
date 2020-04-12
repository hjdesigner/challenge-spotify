import React from 'react';
import { objectOf, any, func } from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addAudio } from 'reduxFlow/reducers/album/action-creators';

function millisToMinutesAndSeconds(millis) {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return `${minutes}:${(seconds < 10 ? '0' : '') + seconds}`;
}

const Songs = ({ item, handleClick }) => (
  <Container onClick={handleClick(item.preview_url)}>
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
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
const Time = styled(Number)``;

const mapDispatchToProps = (dispatch) => ({
  handleClick: (item) => (e) => {
    e.preventDefault();
    dispatch(addAudio(item));
  },
});

Songs.defaultProps = {
  item: {},
  handleClick: () => {},
};

Songs.propTypes = {
  item: objectOf(any),
  handleClick: func,
};

export default connect(null, mapDispatchToProps)(Songs);
