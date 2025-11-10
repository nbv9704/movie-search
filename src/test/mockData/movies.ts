import type { Movie, MovieDetail, Cast, Video } from '../../types/movie';

export const mockMovie: Movie = {
  id: 550,
  title: 'Fight Club',
  original_title: 'Fight Club',
  overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy.',
  poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
  backdrop_path: '/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg',
  release_date: '1999-10-15',
  vote_average: 8.4,
  vote_count: 26280,
  popularity: 61.416,
  genre_ids: [18, 53, 35],
  adult: false,
  original_language: 'en',
  video: false,
};

export const mockMovies: Movie[] = [
  mockMovie,
  {
    id: 680,
    title: 'Pulp Fiction',
    original_title: 'Pulp Fiction',
    overview: 'A burger-loving hit man, his philosophical partner, and more.',
    poster_path: '/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    backdrop_path: '/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
    release_date: '1994-09-10',
    vote_average: 8.5,
    vote_count: 27100,
    popularity: 65.123,
    genre_ids: [53, 80],
    adult: false,
    original_language: 'en',
    video: false,
  },
  {
    id: 155,
    title: 'The Dark Knight',
    original_title: 'The Dark Knight',
    overview: 'Batman raises the stakes in his war on crime.',
    poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdrop_path: '/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg',
    release_date: '2008-07-16',
    vote_average: 8.5,
    vote_count: 32100,
    popularity: 123.456,
    genre_ids: [18, 28, 80, 53],
    adult: false,
    original_language: 'en',
    video: false,
  },
];

export const mockMovieDetail: MovieDetail = {
  ...mockMovie,
  genres: [
    { id: 18, name: 'Drama' },
    { id: 53, name: 'Thriller' },
  ],
  runtime: 139,
  budget: 63000000,
  revenue: 100853753,
  status: 'Released',
  tagline: 'Mischief. Mayhem. Soap.',
  homepage: 'http://www.foxmovies.com/movies/fight-club',
  production_companies: [
    {
      id: 508,
      name: 'Regency Enterprises',
      logo_path: '/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png',
      origin_country: 'US',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America',
    },
  ],
  spoken_languages: [
    {
      iso_639_1: 'en',
      name: 'English',
      english_name: 'English',
    },
  ],
};

export const mockCast: Cast[] = [
  {
    id: 819,
    name: 'Edward Norton',
    character: 'The Narrator',
    profile_path: '/8nytsqL59SFJTVYVrN72k6qkGgJ.jpg',
    order: 0,
  },
  {
    id: 287,
    name: 'Brad Pitt',
    character: 'Tyler Durden',
    profile_path: '/kU3B75TyRiCgE270EyZnHjfivoq.jpg',
    order: 1,
  },
];

export const mockVideos: Video[] = [
  {
    id: '639d5326c90b6400820fc714',
    key: 'BdJKm16Co6M',
    name: 'Official Trailer',
    site: 'YouTube',
    type: 'Trailer',
    official: true,
  },
];
