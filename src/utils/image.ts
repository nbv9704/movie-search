const IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

export const getImageUrl = (
  path: string | null,
  size: 'w200' | 'w300' | 'w500' | 'w780' | 'original' = 'w500'
): string => {
  if (!path) return '/placeholder-movie.jpg'; // Add placeholder image
  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export const getPosterUrl = (path: string | null): string => {
  return getImageUrl(path, 'w500');
};

export const getBackdropUrl = (path: string | null): string => {
  return getImageUrl(path, 'original');
};

export const getProfileUrl = (path: string | null): string => {
  return getImageUrl(path, 'w200');
};