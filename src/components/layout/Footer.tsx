import { Film, Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Film className="w-6 h-6 text-blue-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Powered by TMDB API
            </span>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
            <span>© {new Date().getFullYear()} MovieSearch</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </p>
      </div>
    </footer>
  );
}
