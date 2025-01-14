import React, { useEffect } from 'react';
import { ThemeProvider as ThemMuiProvider } from '@mui/system';
import { theme } from 'config/theme';
import 'styles/globals.css';
import Router from 'containers/Router';
import { BrowserRouter, useLocation } from 'react-router-dom';
import './i18n';
import { useTranslation } from 'react-i18next';

function Component() {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    const language = pathname.split('/')[1];
    if (['en', 'vi'].includes(language)) {
      i18n.changeLanguage(language);
    }
  }, [pathname, i18n]);

  return <Router />;
}

const App = () => {
  return (
    <BrowserRouter>
      <ThemMuiProvider theme={theme}>
        <Component />
      </ThemMuiProvider>
    </BrowserRouter>
  );
};
export default App;
