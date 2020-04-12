import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';
import styled from 'styled-components';
import Token from 'components/Token';
import Loading from 'components/Loading';
import Search from 'views/search';
import Album from 'views/album';
import Theme from 'utils/theme';
import { statusToken, addToken } from 'reduxFlow/reducers/token/action-creators';
import { falseLoader } from 'reduxFlow/reducers/loader/action-creators';
import 'boxicons';

const App = ({
  viewToken,
  loading,
  showToken,
  hiddenToken,
  viewAlbum,
}) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === '' || token === null) {
      return showToken();
    }
    return hiddenToken(token);
  }, []);

  return (
    <Theme>
      {loading && <Loading />}
      {!viewToken && !loading && <Token />}
      {viewToken && !loading && (
        <Container>
          <Logo>
            <BgLogo>
              <box-icon size="lg" type="logo" name="spotify" />
            </BgLogo>
          </Logo>
          <Main>
            {!viewAlbum && <Search />}
            {viewAlbum && <Album />}
          </Main>
        </Container>
      )}
    </Theme>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: ${({ theme }) => theme.spaces.large} auto 0;
  padding: 0 ${({ theme }) => theme.spaces.large};
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    display: flex;
  }
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    margin-right: ${({ theme }) => theme.spaces.large};
    width: 100px;
  }
`;
const BgLogo = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
  height: 42px;
  margin-bottom: ${({ theme }) => theme.spaces.medium};
  width: 42px;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    height: 52px;
    margin-bottom: ${({ theme }) => theme.spaces.large};
    width: 52px;
  }

  box-icon {
    height: 42px;
    width: 42px;

    @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
      height: 52px;
      width: 52px;
    }
  }
`;
const Main = styled.main`
  flex: 1;
`;

const mapStateProps = (state) => ({
  viewToken: state.token.status,
  loading: state.loader.status,
  viewAlbum: state.album.status,
});

const mapDispatchToProps = (dispatch) => ({
  showToken: () => {
    dispatch(statusToken(false));
    dispatch(falseLoader());
  },
  hiddenToken: (token) => {
    dispatch(addToken(token));
    dispatch(statusToken(true));
    dispatch(falseLoader());
  },
});

App.propTypes = {
  viewToken: bool.isRequired,
  viewAlbum: bool.isRequired,
  loading: bool.isRequired,
  showToken: func.isRequired,
  hiddenToken: func.isRequired,
};

export default connect(mapStateProps, mapDispatchToProps)(App);
