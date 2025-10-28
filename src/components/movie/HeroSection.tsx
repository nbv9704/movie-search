import { useState, useEffect } from 'react';
import { Play, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Movie } from '../../types/movie';
import { getBackdropUrl } from '../../utils/image';

interface HeroSectionProps {
  movies: Movie[];
}

export default function HeroSection({ movies }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (movies.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length]);

  if (movies.length === 0) return null;

  const movie = movies[currentIndex];

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${getBackdropUrl(movie.backdrop_path)})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 dark:from-gray-900/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-lg">
            {movie.title}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 line-clamp-3 drop-shadow">
            {movie.overview}
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate(`/movie/${movie.id}`)}
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors shadow-lg"
            >
              <Play className="w-5 h-5" />
              Watch Now
            </button>
            <button
              onClick={() => navigate(`/movie/${movie.id}`)}
              className="flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-gray-900 dark:text-white rounded-lg transition-colors backdrop-blur-sm shadow-lg"
            >
              <Info className="w-5 h-5" />
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-blue-500'
                : 'w-4 bg-gray-400 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}