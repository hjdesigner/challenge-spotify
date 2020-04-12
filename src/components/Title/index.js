import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

export const TitleH1 = ({ title }) => (
  <H1>{ title }</H1>
);

export const TitleH2 = ({ title }) => (
  <H2>{ title }</H2>
);

export const TitleH3 = ({ title }) => (
  <H3>{ title }</H3>
);

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 24px;
  font-weight: 400;
  width: 100%;
`;
const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 18px;
  font-weight: 400;
  width: 100%;
`;
const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  font-weight: 400;
  width: 100%;
`;

TitleH1.defaultProps = {
  title: '',
};
TitleH1.propTypes = {
  title: string,
};

TitleH2.defaultProps = {
  title: '',
};
TitleH2.propTypes = {
  title: string,
};

TitleH3.defaultProps = {
  title: '',
};
TitleH3.propTypes = {
  title: string,
};
