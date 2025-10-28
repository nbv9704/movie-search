import { Loader2 } from 'lucide-react';

interface LoadingProps {
  fullScreen?: boolean;
  text?: string;
}

export function Loading({ fullScreen = false, text = 'Loading...' }: LoadingProps) {
  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
      <p className="text-gray-600 dark:text-gray-400">{text}</p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
        {content}
      </div>
    );
  }

  return (
    <div className="w-full py-20 flex items-center justify-center">
      {content}
    </div>
  );
}

export function MovieCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[2/3] bg-gray-300 dark:bg-gray-700 rounded-lg" />
      <div className="mt-2 space-y-2">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
      </div>
    </div>
  );
}

export function MovieGridSkeleton({ count = 20 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <MovieCardSkeleton key={i} />
      ))}
    </div>
  );
}