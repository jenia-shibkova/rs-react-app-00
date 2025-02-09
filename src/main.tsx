import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { Details, ErrorBoundary, NotFound } from './components';
import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path=":id" element={<Details />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
