import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import RouterApp from './router';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyles';
import { configureAppStore } from './store';

const store = configureAppStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <RouterApp />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
