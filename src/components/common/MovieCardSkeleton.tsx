export default function MovieCardSkeleton() {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800 shadow-md animate-pulse">
      {/* Poster placeholder */}
      <div className="aspect-[2/3] bg-gray-300 dark:bg-gray-700" />

      {/* Rating badge placeholder */}
      <div className="absolute top-2 right-2 bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded-full w-12 h-6" />
    </div>
  );
}
