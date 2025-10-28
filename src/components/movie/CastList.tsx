import type { Cast } from '../../types/movie';
import { getProfileUrl } from '../../utils/image';
import { User } from 'lucide-react';

interface CastListProps {
  cast: Cast[];
}

export default function CastList({ cast }: CastListProps) {
  if (cast.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Cast
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {cast.map((person) => (
          <div
            key={person.id}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="aspect-[2/3] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              {person.profile_path ? (
                <img
                  src={getProfileUrl(person.profile_path)}
                  alt={person.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <User className="w-16 h-16 text-gray-400" />
              )}
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white line-clamp-1">
                {person.name}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
                {person.character}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}