import MovieCardSkeleton from './MovieCardSkeleton';

interface MovieGridSkeletonProps {
  count?: number;
}

export default function MovieGridSkeleton({ count = 20 }: MovieGridSkeletonProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <MovieCardSkeleton key={index} />
      ))}
    </div>
  );
}
