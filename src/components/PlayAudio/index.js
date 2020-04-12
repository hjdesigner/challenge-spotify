import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import ReactAudioPlayer from 'react-audio-player';

const PlayAudio = ({ audio }) => (
  <Container>
    <ReactAudioPlayer
      src={audio}
      autoPlay
      controls
    />
  </Container>
);

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.ice};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  width: 100%;
`;

PlayAudio.propTypes = {
  audio: string.isRequired,
};

export default PlayAudio;
