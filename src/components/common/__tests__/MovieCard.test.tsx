import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MovieCard from '../MovieCard';
import { mockMovie } from '../../../test/mockData/movies';

// Mock the image utils
vi.mock('../../../utils/image', () => ({
  getPosterUrl: (path: string | null) => path ? `https://image.tmdb.org/t/p/w500${path}` : '/placeholder.jpg',
}));

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('MovieCard', () => {
  it('should render movie title', () => {
    renderWithRouter(<MovieCard movie={mockMovie} />);
    expect(screen.getByText('Fight Club')).toBeInTheDocument();
  });

  it('should render movie poster image', () => {
    renderWithRouter(<MovieCard movie={mockMovie} />);
    const image = screen.getByAltText('Fight Club') as HTMLImageElement;
    expect(image).toBeInTheDocument();
  });

  it('should render movie rating', () => {
    renderWithRouter(<MovieCard movie={mockMovie} />);
    const ratings = screen.getAllByText('8.4');
    expect(ratings.length).toBeGreaterThan(0);
  });

  it('should have link to movie detail page', () => {
    renderWithRouter(<MovieCard movie={mockMovie} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/movie/550');
  });
});
