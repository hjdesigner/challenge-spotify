import React, { useEffect } from 'react';
import {
  objectOf,
  arrayOf,
  any,
  func,
  string,
  bool,
} from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import Cover from 'components/Cover';
import Songs from 'components/Songs';
import Loading from 'components/Loading';
import {
  resetAlbum,
  toggleViewAlbum,
  toggleLoadingAlbum,
  addSongs,
} from 'reduxFlow/reducers/album/action-creators';
import { statusToken, addToken } from 'reduxFlow/reducers/token/action-creators';

const Album = ({
  album,
  handleClick,
  id,
  token,
  getSongs,
  songs,
  loader,
  resetToken,
}) => {
  useEffect(() => {
    axios.get(`${process.env.SPOTIFY_API}albums/${id}/tracks`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        getSongs(response.data.items);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          resetToken();
        }
      });
  }, []);

  return (
    <Container>
      <Action>
        <ComeBack onClick={handleClick}>{'< Voltar'}</ComeBack>
      </Action>
      <Cover item={album} />
      <ListSongs>
        {loader && (
          <ElementLoading>
            <Loading vh={false} />
          </ElementLoading>
        )}
        {songs.length > 0 && (
          songs.map((item) => <Songs key={item.id} item={item} />)
        )}
      </ListSongs>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Action = styled.div`
  margin: ${({ theme }) => theme.spaces.large} 0;
  width: 100%;
`;
const ComeBack = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.ice};
  cursor: pointer;
  font-size: 1.4em;
  font-weight: 400;
  transition: all .2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
const ListSongs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin-top: ${({ theme }) => theme.spaces.large};

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    margin-top: 0;
    width: 63%;
  }
`;
const ElementLoading = styled.div`
  margin: ${({ theme }) => theme.spaces.bigLarge} 0;
  width: 100%;
`;

const mapStateProps = (state) => ({
  album: state.album.album,
  id: state.album.id,
  token: state.token.token,
  songs: state.album.songs,
  loader: state.album.loading,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => {
    dispatch(toggleViewAlbum(false));
    dispatch(resetAlbum());
  },
  getSongs: (items) => {
    dispatch(addSongs(items));
    dispatch(toggleLoadingAlbum(false));
  },
  resetToken: () => {
    dispatch(addToken(''));
    dispatch(statusToken(false));
  },
});

Album.defaultProps = {
  album: {},
  songs: [],
  handleClick: () => {},
};

Album.propTypes = {
  album: objectOf(any),
  handleClick: func,
  id: string.isRequired,
  token: string.isRequired,
  getSongs: func.isRequired,
  resetToken: func.isRequired,
  songs: arrayOf(any),
  loader: bool.isRequired,
};

export default connect(mapStateProps, mapDispatchToProps)(Album);
