import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import type { Movie } from '../../types/movie';
import { getPosterUrl } from '../../utils/image';
import { formatRating, formatYear } from '../../utils/formatters';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    >
      {/* Poster Image */}
      <div className="aspect-[2/3] overflow-hidden">
        <img
          src={getPosterUrl(movie.poster_path)}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Overlay with info */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
            {movie.title}
          </h3>
          <div className="flex items-center justify-between text-sm text-gray-300">
            <span>{formatYear(movie.release_date)}</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{formatRating(movie.vote_average)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rating badge (always visible) */}
      <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        <span className="text-white text-xs font-bold">
          {formatRating(movie.vote_average)}
        </span>
      </div>
    </Link>
  );
}