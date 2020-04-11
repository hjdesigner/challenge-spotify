import React from 'react';
import styled from 'styled-components';
import Input from 'components/Input';
import { TitleH2 } from 'components/Title';
import Albums from 'components/Albums';

const data = [
  {
    artists: [
      {
        name: 'Dead Fish',
      },
    ],
    id: '7bUuKrK0ksqlJ2oDYfo0N5',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b273f1252d4f09577afc734df228',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e02f1252d4f09577afc734df228',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d00004851f1252d4f09577afc734df228',
        width: 64,
      },
    ],
    name: 'Zero e Um',
  },
  {
    artists: [
      {
        name: 'Dead Fish',
      },
    ],
    id: '4jNiUoTxG8CGTpajlvWqw0',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b2737f27224a9a8171cd13cb0d33',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e027f27224a9a8171cd13cb0d33',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d000048517f27224a9a8171cd13cb0d33',
        width: 64,
      },
    ],
    name: 'XXV Ao Vivo Em SP',
  },
];


const Search = () => (
  <>
    <ContainerSearch>
      <FormSearch>
        <Input
          text="Busque por artistas, álbuns ou músicas"
          type="text"
          name="search"
          placeholder="Comece a escrever..."
          value=""
          handleChange={() => {}}
        />
      </FormSearch>

      <Showcase>
        <TitleH2 title="Álbuns buscados recentemente" />
        <Items>
          {data.map((item) => <Albums key={item.id} item={item} />)}
        </Items>
      </Showcase>

    </ContainerSearch>
  </>
);

const ContainerSearch = styled.section``;
const FormSearch = styled.form``;
const Showcase = styled.section`
  margin-top: ${({ theme }) => theme.spaces.bigLarge};
`;
const Items = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spaces.large};
`;

export default Search;
