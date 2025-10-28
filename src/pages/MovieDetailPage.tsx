import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Star, ArrowLeft } from 'lucide-react';
import { Loading } from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';
import CastList from '../components/movie/CastList';
import VideoPlayer from '../components/movie/VideoPlayer';
import MovieGrid from '../components/movie/MovieGrid';
import {
  getMovieDetails,
  getMovieCredits,
  getMovieVideos,
  getSimilarMovies,
} from '../services/tmdbApi';
import { getBackdropUrl, getPosterUrl } from '../utils/image';
import { formatRating, formatYear, formatRuntime } from '../utils/formatters';
import type { MovieDetail, Cast, Video, Movie } from '../types/movie';

export default function MovieDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [cast, setCast] = useState<Cast[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [similar, setSimilar] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);
        const [movieData, castData, videosData, similarData] = await Promise.all([
          getMovieDetails(parseInt(id)),
          getMovieCredits(parseInt(id)),
          getMovieVideos(parseInt(id)),
          getSimilarMovies(parseInt(id)),
        ]);
        setMovie(movieData);
        setCast(castData);
        setVideos(videosData);
        setSimilar(similarData.results.slice(0, 10));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load movie details');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return <Loading fullScreen text="Loading movie details..." />;
  }

  if (error || !movie) {
    return (
      <ErrorMessage
        message={error || 'Movie not found'}
        onRetry={() => window.location.reload()}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Backdrop */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${getBackdropUrl(movie.backdrop_path)})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-black/50 to-black/30" />
        </div>

        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-black/50 hover:bg-black/70 text-white rounded-lg backdrop-blur-sm transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </Link>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-40 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Poster */}
          <div className="flex-shrink-0">
            <img
              src={getPosterUrl(movie.poster_path)}
              alt={movie.title}
              className="w-64 rounded-lg shadow-2xl"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {movie.title}
            </h1>

            {movie.tagline && (
              <p className="text-lg text-gray-600 dark:text-gray-400 italic mb-6">
                "{movie.tagline}"
              </p>
            )}

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-lg">{formatRating(movie.vote_average)}</span>
                <span className="text-sm">({movie.vote_count} votes)</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formatYear(movie.release_date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{formatRuntime(movie.runtime)}</span>
              </div>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {movie.overview}
              </p>
            </div>
          </div>
        </div>

        {/* Trailer */}
        {videos.length > 0 && (
          <div className="mb-12">
            <VideoPlayer videos={videos} />
          </div>
        )}

        {/* Cast */}
        {cast.length > 0 && (
          <div className="mb-12">
            <CastList cast={cast} />
          </div>
        )}

        {/* Similar Movies */}
        {similar.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Similar Movies
            </h2>
            <MovieGrid movies={similar} />
          </div>
        )}
      </div>
    </div>
  );
}