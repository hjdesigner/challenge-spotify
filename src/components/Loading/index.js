import React from 'react';
import styled, { keyframes } from 'styled-components';
import 'boxicons';

const Loading = () => (
  <Container>
    <box-icon name="loader-alt" />
  </Container>
);

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;

  box-icon {
    animation: ${rotate} 2s linear infinite;
    fill: #FFF;
  }
`;

export default Loading;
