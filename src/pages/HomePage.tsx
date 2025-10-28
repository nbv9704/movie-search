import { useEffect, useState } from 'react';
import HeroSection from '../components/movie/HeroSection';
import MovieGrid from '../components/movie/MovieGrid';
import { Loading, MovieGridSkeleton } from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';
import { getTrendingMovies, getPopularMovies } from '../services/tmdbApi';
import type { Movie } from '../types/movie';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const [trending, popular] = await Promise.all([
          getTrendingMovies('week'),
          getPopularMovies(1),
        ]);
        setTrendingMovies(trending.results.slice(0, 5));
        setPopularMovies(popular.results);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load movies');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <Loading fullScreen text="Loading movies..." />;
  }

  if (error) {
    return (
      <ErrorMessage
        message={error}
        onRetry={() => window.location.reload()}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <HeroSection movies={trendingMovies} />

      {/* Popular Movies */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Popular Movies
        </h2>
        {loading ? (
          <MovieGridSkeleton />
        ) : (
          <MovieGrid movies={popularMovies} />
        )}
      </div>
    </div>
  );
}