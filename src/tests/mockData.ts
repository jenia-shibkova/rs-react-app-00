import { CardProps } from '../components/Card/types';
import { ListProps } from '../components/List/types';
import { HeaderProps } from '../components/Header/types';
import { MarvelItem } from '../api/interfaces';
import { ItemDetails, ItemDetailsResponse } from '../api/interfaces';

export const mockCard: CardProps = {
  id: 1011145,
  name: 'Lord Hawal',
  url: 'http://i.annihil.us/u/prod/marvel/i/mg/9/10/4c002f7d355de.jpg',
  comics: {
    available: 0,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011145/comics',
    items: [],
    returned: 1,
  },
  series: {
    available: 0,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011145/series',
    items: [],
    returned: 1,
  },
  stories: {
    available: 0,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011145/stories',
    items: [],
    returned: 1,
  },
};

export const mockMarvelItem: MarvelItem = {
  id: 1011145,
  name: 'Lord Hawal',
  description: 'gfgsafj',
  modified: 'djhd',
  thumbnail: {
    path: 'http://gateway.marvel.com/v1/public/characters/1011145/series',
    extension: 'jhl',
  },
  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011145/series',
  comics: {
    available: 0,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011145/comics',
    items: [
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011145/comics',
        name: 'name',
      },
    ],
    returned: 0,
  },
  series: {
    available: 0,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011145/comics',
    items: [
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011145/comics',
        name: 'name',
      },
    ],
    returned: 0,
  },
  stories: {
    available: 0,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011145/comics',
    items: [
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011145/comics',
        name: 'name',
        type: '',
      },
    ],
    returned: 0,
  },
  events: {
    available: 0,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011145/comics',
    items: [
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011145/comics',
        name: 'name',
      },
    ],
    returned: 0,
  },
  urls: [
    {
      type: 'link',
      url: 'http://gateway.marvel.com/v1/public/characters/1011145/comics',
    },
  ],
};

export const mockList: ListProps = {
  items: [mockMarvelItem],
  isFetching: true,
  errorMessage: '',
};

export const mockHeader: HeaderProps = {
  handleInputChange: () => {},
  handleClick: () => {},
  handleNext: () => {},
  text: 'lo',
  total: 200,
  offset: 10,
};

export const mockDetails: ItemDetails = {
  id: 1009407,
  name: 'Loki',
  description: '',
  modified: '2017-08-21T16:45:34-0400',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/90/526547f509313',
    extension: 'jpg',
  },
  resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009407',
  comics: {
    available: 498,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009407/comics',
    items: [
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/43504',
        name: 'A+X (2012) #5',
      },
    ],
    returned: 20,
  },
  stories: {
    available: 564,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009407/stories',
    items: [
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/1664',
        name: 'Interior #1664',
        type: 'interiorStory',
      },
    ],
    returned: 20,
  },
  events: {
    available: 9,
    collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009407/events',
    items: [
      {
        resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
        name: 'Acts of Vengeance!',
      },
    ],
    returned: 9,
  },
  urls: [
    {
      type: 'detail',
      url: 'http://marvel.com/characters/33/loki?utm_campaign=apiRef&utm_source=2e1cdeec426ae323484f29024084c206',
    },
    {
      type: 'wiki',
      url: 'http://marvel.com/universe/Loki?utm_campaign=apiRef&utm_source=2e1cdeec426ae323484f29024084c206',
    },
    {
      type: 'comiclink',
      url: 'http://marvel.com/comics/characters/1009407/loki?utm_campaign=apiRef&utm_source=2e1cdeec426ae323484f29024084c206',
    },
  ],
  series: {
    available: 0,
    collectionURI: '',
    items: [],
    returned: 0,
  },
};

export const mockDetailsResponse: ItemDetailsResponse = {
  data: {
    code: 49053,
    status: 'ok',
    copyright: 'jk',
    attributionText: 'kkkk',
    attributionHTML: 'iii',
    data: {
      offset: 10,
      limit: 100,
      total: 10,
      count: 3,
      results: mockDetails,
    },
  },
};
