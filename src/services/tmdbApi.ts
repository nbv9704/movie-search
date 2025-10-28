import axios from 'axios';
import type { MovieDetail, MovieResponse, Cast, Video } from '../types/movie';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

const tmdbClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Tìm kiếm phim
export const searchMovies = async (
  query: string,
  page: number = 1
): Promise<MovieResponse> => {
  try {
    const response = await tmdbClient.get('/search/movie', {
      params: { query, page },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw new Error('Failed to search movies');
  }
};

// Lấy phim phổ biến
export const getPopularMovies = async (page: number = 1): Promise<MovieResponse> => {
  try {
    const response = await tmdbClient.get('/movie/popular', {
      params: { page },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw new Error('Failed to fetch popular movies');
  }
};

// Lấy phim trending
export const getTrendingMovies = async (
  timeWindow: 'day' | 'week' = 'week'
): Promise<MovieResponse> => {
  try {
    const response = await tmdbClient.get(`/trending/movie/${timeWindow}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw new Error('Failed to fetch trending movies');
  }
};

// Lấy chi tiết phim
export const getMovieDetails = async (movieId: number): Promise<MovieDetail> => {
  try {
    const response = await tmdbClient.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw new Error('Failed to fetch movie details');
  }
};

// Lấy cast
export const getMovieCredits = async (movieId: number): Promise<Cast[]> => {
  try {
    const response = await tmdbClient.get(`/movie/${movieId}/credits`);
    return response.data.cast.slice(0, 10); // Top 10 cast
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw new Error('Failed to fetch movie credits');
  }
};

// Lấy videos (trailers)
export const getMovieVideos = async (movieId: number): Promise<Video[]> => {
  try {
    const response = await tmdbClient.get(`/movie/${movieId}/videos`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie videos:', error);
    throw new Error('Failed to fetch movie videos');
  }
};

// Lấy phim tương tự
export const getSimilarMovies = async (
  movieId: number,
  page: number = 1
): Promise<MovieResponse> => {
  try {
    const response = await tmdbClient.get(`/movie/${movieId}/similar`, {
      params: { page },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching similar movies:', error);
    throw new Error('Failed to fetch similar movies');
  }
};

// Lấy genres
export const getGenres = async () => {
  try {
    const response = await tmdbClient.get('/genre/movie/list');
    return response.data.genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw new Error('Failed to fetch genres');
  }
};