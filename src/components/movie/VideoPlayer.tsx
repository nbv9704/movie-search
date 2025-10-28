import type { Video } from '../../types/movie';

interface VideoPlayerProps {
  videos: Video[];
}

export default function VideoPlayer({ videos }: VideoPlayerProps) {
  const trailer = videos.find(
    (video) =>
      video.site === 'YouTube' &&
      (video.type === 'Trailer' || video.type === 'Teaser')
  );

  if (!trailer) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Trailer
      </h2>
      <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
        <iframe
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title={trailer.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}