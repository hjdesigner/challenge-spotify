import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Title = ({ title }) => (
  <Element>{ title }</Element>
);

const Element = styled.h1``;

Title.defaultProps = {
  title: '',
};

Title.propTypes = {
  title: string,
};

export default Title;
