import { expect } from 'chai';
import deepfreeze from 'deep-freeze';
import search from './index';
import {
  SEARCH,
  ADD_SEARCH,
  LOADING,
  RECENT,
  EMPTY,
} from './actions';

it('Should return the search according to the value passed', () => {
  const before = deepfreeze({
    search: '',
    result: [],
    recent: [],
    loading: false,
    empty: false,
  });
  const action = deepfreeze({
    type: SEARCH,
    payload: {
      search: 'Metallica',
    },
  });
  const after = {
    search: 'Metallica',
    result: [],
    recent: [],
    loading: false,
    empty: false,
  };
  expect(search(before, action)).to.be.deep.equal(after);
});

it('Should change the loading status from false to true', () => {
  const before = deepfreeze({
    search: '',
    result: [],
    recent: [],
    loading: false,
    empty: false,
  });
  const action = deepfreeze({
    type: LOADING,
    payload: {
      loading: true,
    },
  });
  const after = {
    search: '',
    result: [],
    recent: [],
    loading: true,
    empty: false,
  };
  expect(search(before, action)).to.be.deep.equal(after);
});

it('Should change the empty status from false to true', () => {
  const before = deepfreeze({
    search: '',
    result: [],
    recent: [],
    loading: false,
    empty: false,
  });
  const action = deepfreeze({
    type: EMPTY,
    payload: {
      empty: true,
    },
  });
  const after = {
    search: '',
    result: [],
    recent: [],
    loading: false,
    empty: true,
  };
  expect(search(before, action)).to.be.deep.equal(after);
});

it('Should return the search with the result and fill in the recent', () => {
  const before = deepfreeze({
    search: '',
    result: [],
    recent: [],
    loading: false,
    empty: false,
  });
  const action = deepfreeze({
    type: ADD_SEARCH,
    payload: {
      search: 'Metallica',
      result: [
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
        }
      ],
    },
  });
  const after = {
    search: 'Metallica',
    result: [
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
    ],
    recent: [
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
    ],
    loading: false,
    empty: false,
  };
  expect(search(before, action)).to.be.deep.equal(after);
});
it('Should the new object in recent if already', () => {
  const before = deepfreeze({
    search: '',
    result: [],
    recent: [
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
    ],
    loading: false,
    empty: false,
  });
  const action = deepfreeze({
    type: ADD_SEARCH,
    payload: {
      search: 'Metallica',
      result: [
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
      ]
    },
  });
  const after = {
    search: 'Metallica',
    result: [
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
    ],
    recent: [
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
    ],
    loading: false,
    empty: false,
  };
  expect(search(before, action)).to.be.deep.equal(after);
});
it('Should only return the changed result if the album was searched for in recent', () => {
  const before = deepfreeze({
    search: '',
    result: [],
    recent: [
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
    ],
    loading: false,
    empty: false,
  });
  const action = deepfreeze({
    type: RECENT,
    payload: {
      search: 'Dead Fish',
      recent: [
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
        }
      ],
    },
  });
  const after = {
    search: 'Dead Fish',
    result: [
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
    ],
    recent: [
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
    ],
    loading: false,
    empty: false,
  };
  expect(search(before, action)).to.be.deep.equal(after);
});