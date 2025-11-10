export default function HeroSkeleton() {
  return (
    <div className="relative h-[70vh] overflow-hidden bg-gray-200 dark:bg-gray-800 animate-pulse">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-300 dark:from-gray-900 via-transparent to-transparent" />
      
      {/* Content placeholder */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl space-y-4">
          {/* Title placeholder */}
          <div className="h-16 bg-gray-300 dark:bg-gray-700 rounded-lg w-3/4" />
          
          {/* Description placeholders */}
          <div className="space-y-2">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-full" />
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-5/6" />
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-4/6" />
          </div>
          
          {/* Buttons placeholder */}
          <div className="flex gap-4 pt-2">
            <div className="h-12 w-40 bg-gray-300 dark:bg-gray-700 rounded-lg" />
            <div className="h-12 w-40 bg-gray-300 dark:bg-gray-700 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Indicators placeholder */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="h-1 w-4 bg-gray-400 rounded-full" />
        ))}
      </div>
    </div>
  );
}
