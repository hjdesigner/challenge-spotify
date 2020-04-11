import React from 'react';
import { node } from 'prop-types';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  colors: {
    black: '#000000',
    gray: '#999999',
    ice: '#FAFAFA',
    white: '#FFFFFF',
    blackTransparent: 'rgba(0, 0, 0, .5)',
  },
  spaces: {
    default: '8px',
    small: '8px',
    medium: '16px',
    large: '24px',
    extraLarge: '32px',
    bigLarge: '56px',
  },
  media: {
    tablet: '768px',
    desktop: '1024px',
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    background-color: #151515;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
  }
`;

const Theme = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

Theme.propTypes = {
  children: node.isRequired,
};

export default Theme;
