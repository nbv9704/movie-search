import { describe, it, expect } from 'vitest';
import { formatRating, formatYear, formatRuntime } from '../formatters';

describe('formatters', () => {
  describe('formatRating', () => {
    it('should format rating to 1 decimal place', () => {
      expect(formatRating(8.456)).toBe('8.5');
      expect(formatRating(7.0)).toBe('7.0');
    });
  });

  describe('formatYear', () => {
    it('should extract year from date string', () => {
      expect(formatYear('1999-10-15')).toBe('1999');
      expect(formatYear('2024-01-01')).toBe('2024');
    });
  });

  describe('formatRuntime', () => {
    it('should format runtime correctly', () => {
      expect(formatRuntime(139)).toBe('2h 19m');
      expect(formatRuntime(90)).toBe('1h 30m');
    });
  });
});
