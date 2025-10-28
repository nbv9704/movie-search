import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/common/SearchBar';
import MovieGrid from '../components/movie/MovieGrid';
import Pagination from '../components/common/Pagination';
import { MovieGridSkeleton } from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';
import { useSearch } from '../hooks/useMovies';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const pageParam = searchParams.get('page') || '1';
  const [page, setPage] = useState(parseInt(pageParam));

  const { movies, loading, error, totalPages } = useSearch(query, page);

  useEffect(() => {
    setPage(1);
  }, [query]);

  const handleSearch = (newQuery: string) => {
    if (newQuery) {
      setSearchParams({ q: newQuery, page: '1' });
    } else {
      setSearchParams({});
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setSearchParams({ q: query, page: String(newPage) });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Search Movies
          </h1>
          <SearchBar onSearch={handleSearch} initialValue={query} />
        </div>

        {/* Results */}
        {error ? (
          <ErrorMessage message={error} />
        ) : loading ? (
          <MovieGridSkeleton />
        ) : query ? (
          <>
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                Found {movies.length > 0 ? `${movies.length} results` : 'no results'} for "{query}"
              </p>
            </div>
            <MovieGrid movies={movies} />
            {totalPages > 1 && (
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Start searching for your favorite movies!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}