import React from 'react';
import {
  arrayOf,
  string,
  func,
  any,
  bool,
} from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import axios from 'axios';
import Input from 'components/Input';
import { TitleH2 } from 'components/Title';
import Albums from 'components/Albums';
import Loading from 'components/Loading';
import {
  changeSearch,
  toggleLoading,
  addSearch,
  addRecentSearch,
  toggleEmpty,
} from 'reduxFlow/reducers/search/action-creators';
import { statusToken, addToken } from 'reduxFlow/reducers/token/action-creators';

function findMatches(wordToMatch, data) {
  return data.filter((item) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return item.name.match(regex) || item.artists[0].name.match(regex);
  });
}

const Search = ({
  value,
  handleOnChange,
  handleSearch,
  token,
  result,
  loader,
  recent,
  empty,
}) => (
  <>
    <ContainerSearch>
      <FormSearch onSubmit={(e) => handleSearch(e, value, token, recent)}>
        <Input
          text="Busque por artistas, álbuns ou músicas"
          type="text"
          name="search"
          placeholder="Comece a escrever..."
          value={value}
          handleChange={handleOnChange}
        />
      </FormSearch>
    </ContainerSearch>
    {loader && (
      <ElementLoading>
        <Loading vh={false} />
      </ElementLoading>
    )}
    {empty && (
      <Empty>
        <TitleH2 title={`Não foi encontrado um resultado para a busca "${value}"`} />
      </Empty>
    )}
    {result.length > 0 && (
      <Showcase>
        <TitleH2 title={`Resultado encontrado para "${value}"`} />
        <Items>
          {result.map((item) => <Albums key={item.id} item={item} />)}
        </Items>
      </Showcase>
    )}
    {recent.length > 0 && (
      <Showcase>
        <TitleH2 title="Álbuns buscados recentemente" />
        <Items>
          {recent.map((item) => <Albums key={item.id} item={item} />)}
        </Items>
      </Showcase>
    )}
  </>
);

const ContainerSearch = styled.section``;
const FormSearch = styled.form``;
const Showcase = styled.section`
  margin-top: ${({ theme }) => theme.spaces.bigLarge};
`;
const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin-top: ${({ theme }) => theme.spaces.large};
`;
const ElementLoading = styled.div`
  margin: ${({ theme }) => theme.spaces.bigLarge} 0;
`;
const Empty = styled.div`
  margin: ${({ theme }) => theme.spaces.bigLarge} 0;
`;

const mapStateProps = (state) => ({
  value: state.search.search,
  token: state.token.token,
  result: state.search.result,
  recent: state.search.recent,
  loader: state.search.loading,
  empty: state.search.empty,
});

const mapDispatchToProps = (dispatch) => ({
  handleOnChange: (event) => {
    dispatch(changeSearch(event.target.value));
  },
  handleSearch: (event, value, token, recent) => {
    event.preventDefault();
    if (value !== '') {
      dispatch(toggleLoading(true));
      const matches = findMatches(value, recent);

      if (matches.length > 0) {
        dispatch(addRecentSearch(value, matches));
        dispatch(toggleLoading(false));
      } else {
        axios.get(`${process.env.SPOTIFY_API}search?query=${value}&type=album&offset=0&limit=20`, {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((result) => {
            if (result.data.albums.items.length === 0) {
              dispatch(toggleEmpty(true));
              dispatch(toggleLoading(false));
            } else {
              dispatch(addSearch(value, result.data.albums.items));
              dispatch(toggleLoading(false));
              dispatch(toggleEmpty(false));
            }
          })
          .catch((error) => {
            if (error.response.status === 401) {
              dispatch(addToken(''));
              dispatch(statusToken(false));
            }
          });
      }
    }
  },
});

Search.defaultProps = {
  result: [],
  recent: [],
};

Search.propTypes = {
  value: string.isRequired,
  token: string.isRequired,
  handleOnChange: func.isRequired,
  handleSearch: func.isRequired,
  result: arrayOf(any),
  recent: arrayOf(any),
  loader: bool.isRequired,
  empty: bool.isRequired,
};

export default connect(mapStateProps, mapDispatchToProps)(Search);
