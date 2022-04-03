// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import './App.css';
// components
// import Settings from './components/settings';
import ScrollToTop from './components/ScrollToTop';
import NotistackProvider from './components/NotistackProvider';
import ThemePrimaryColor from './components/ThemePrimaryColor';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <NotistackProvider>
          {/* <Settings /> */}
          <ScrollToTop />
          <Router />
        </NotistackProvider>
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}
