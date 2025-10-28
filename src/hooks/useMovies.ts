import { useState, useEffect } from 'react';
import type { Movie, MovieResponse } from '../types/movie';
import * as tmdbApi from '../services/tmdbApi';

export function useMovies(
  fetchFunction: (page: number) => Promise<MovieResponse>,
  initialPage: number = 1
) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchFunction(page);
        setMovies(data.results);
        setTotalPages(Math.min(data.total_pages, 500)); // TMDB limits to 500 pages
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  return { movies, loading, error, page, totalPages, setPage };
}

export function useSearch(query: string, page: number = 1) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query.trim()) {
      setMovies([]);
      setTotalPages(0);
      return;
    }

    const searchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await tmdbApi.searchMovies(query, page);
        setMovies(data.results);
        setTotalPages(Math.min(data.total_pages, 500));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to search movies');
      } finally {
        setLoading(false);
      }
    };

    searchMovies();
  }, [query, page]);

  return { movies, loading, error, totalPages };
}