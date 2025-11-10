# 🚀 KẾ HOẠCH CẢI THIỆN DỰ ÁN

## Mức Độ Ưu Tiên

### 🔴 CAO - Bổ sung ngay (1-2 tuần)

#### 1. Testing (Quan trọng nhất cho CV)
```bash
# Cài đặt
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom

# Tạo tests
src/
  components/
    __tests__/
      MovieCard.test.tsx
      SearchBar.test.tsx
  hooks/
    __tests__/
      useMovies.test.ts
  utils/
    __tests__/
      formatters.test.ts
```

**Lý do**: 80% công ty yêu cầu kinh nghiệm testing cho Frontend

#### 2. Performance Optimization
```tsx
// Ví dụ cải thiện
import { memo, useMemo, useCallback } from 'react';

const MovieCard = memo(({ movie, onClick }) => {
  // Component logic
});

const MovieGrid = ({ movies }) => {
  const memoizedMovies = useMemo(() => 
    movies.filter(movie => movie.vote_average > 7), 
    [movies]
  );
  
  const handleClick = useCallback((id) => {
    navigate(`/movie/${id}`);
  }, [navigate]);
  
  return <div>{/* Grid */}</div>;
};
```

#### 3. Error Boundary
```tsx
// src/components/common/ErrorBoundary.tsx
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}
```

### 🟡 TRUNG BÌNH - Nâng cao dự án (2-3 tuần)

#### 4. State Management với Context API
```tsx
// src/context/ThemeContext.tsx
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// src/context/FavoritesContext.tsx
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const addToFavorites = (movie) => {
    // Logic
  };
  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
```

#### 5. Advanced Features
- **Infinite Scroll** với Intersection Observer
- **Favorites System** với localStorage
- **Advanced Filters**: Genre, Year, Rating
- **Loading Skeletons** thay vì spinner
- **Toast Notifications** (react-hot-toast)

#### 6. Accessibility (a11y)
```tsx
// Thêm ARIA labels
<button 
  aria-label="Search movies"
  onClick={handleSearch}
>
  <Search className="w-5 h-5" />
</button>

// Keyboard navigation
onKeyDown={(e) => {
  if (e.key === 'Enter') handleSubmit();
}}

// Focus management
const inputRef = useRef<HTMLInputElement>(null);
useEffect(() => {
  inputRef.current?.focus();
}, []);
```

### 🟢 THẤP - Bonus points (3-4 tuần)

#### 7. CI/CD Pipeline
```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm install
      - run: npm run lint
      - run: npm run test
      - run: npm run build
```

#### 8. PWA Support
```javascript
// vite.config.ts
import { VitePWA } from 'vite-plugin-pwa';

export default {
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Movie Search',
        short_name: 'Movies',
        icons: [...]
      }
    })
  ]
};
```

#### 9. Performance Monitoring
```javascript
// src/utils/analytics.ts
export const trackPageView = (path: string) => {
  // Google Analytics
};

export const trackError = (error: Error) => {
  // Sentry
};
```

## 📊 Timeline Đề Xuất

| Tuần | Task | Thời gian |
|------|------|-----------|
| 1-2 | Testing + Error Boundary | 10-15h |
| 2-3 | Performance Optimization | 8-10h |
| 3-4 | State Management (Context) | 6-8h |
| 4-5 | Advanced Features | 12-15h |
| 5-6 | Accessibility + Documentation | 6-8h |
| 6+ | CI/CD + PWA (Optional) | 8-10h |

## 🎯 Kết Quả Mong Đợi

Sau khi hoàn thành:
- ✅ Dự án đạt chuẩn **Mid-level** thay vì Junior
- ✅ Test coverage > 70%
- ✅ Performance score > 90 (Lighthouse)
- ✅ Accessibility score > 90
- ✅ Nổi bật hơn 90% CV sinh viên
- ✅ Có thể demo tự tin trong phỏng vấn

## 💡 Tips Cho Phỏng Vấn

### Câu Hỏi Thường Gặp:

**Q: Tại sao chọn TypeScript?**
```
A: TypeScript giúp:
- Catch errors sớm trong development
- Better IDE support với autocomplete
- Code dễ maintain và scale
- Type safety cho API responses
```

**Q: Performance optimization như thế nào?**
```
A: Đã implement:
- React.memo cho components
- useMemo/useCallback cho expensive operations
- Lazy loading images
- Code splitting với React.lazy()
- Debounce cho search input
```

**Q: Xử lý errors ra sao?**
```
A: 
- Error Boundary cho React errors
- Try-catch trong API calls
- User-friendly error messages
- Fallback UI khi có lỗi
- Loading states để tránh flash of content
```

**Q: Testing strategy?**
```
A:
- Unit tests cho utils và hooks
- Component tests với React Testing Library
- Integration tests cho user flows
- Test coverage báo cáo với Vitest
```

## 📚 Resources Học Thêm

1. **Testing**: 
   - React Testing Library docs
   - Kent C. Dodds testing course

2. **Performance**:
   - web.dev/vitals
   - React DevTools Profiler

3. **Accessibility**:
   - MDN Web Accessibility
   - A11y Project checklist

4. **Best Practices**:
   - React.dev
   - TypeScript handbook
