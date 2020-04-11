import React from 'react';
import { bool } from 'prop-types';
import styled, { keyframes } from 'styled-components';
import 'boxicons';

const Loading = ({ vh }) => (
  <Container>
    <box-icon view={vh} name="loader-alt" />
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
  height: ${(props) => (props.view ? '100vh' : 'auto')};
  justify-content: center;
  width: 100%;

  box-icon {
    animation: ${rotate} 2s linear infinite;
    fill: #FFF;
  }
`;

Loading.defaultProps = {
  vh: true,
};

Loading.propTypes = {
  vh: bool,
};

export default Loading;
