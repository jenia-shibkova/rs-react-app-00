import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Details, ErrorBoundary, NotFound } from './components';
import { ThemeProvider } from './resources/Themes/ThemeProvider.tsx';
import { store } from './resources/store.ts';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route path=":id" element={<Details />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>,
);
