import React from 'react';
import { ThemeProvider as ThemMuiProvider } from '@mui/system';
import { theme } from 'config/theme';
import 'styles/globals.css';
import Router from 'containers/Router';
import { BrowserRouter } from 'react-router-dom';

function Component() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

const App = () => {
  return (
    <ThemMuiProvider theme={theme}>
      <Component />
    </ThemMuiProvider>
  );
};
export default App;
