import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { Details, NotFound } from '../components';
// import App from '../App';

describe('Main Routing', () => {
  it.skip('renders the App component for the root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes></Routes>
      </MemoryRouter>,
    );
    const paginator = screen.getByTestId('paginator');
    expect(paginator).toBeInTheDocument();
  });

  it('renders the Details component for a dynamic ID route', () => {
    render(
      <MemoryRouter initialEntries={['/809089']}>
        <Routes>
          <Route path="/:id" element={<Details />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByTestId('loader')).toBeInTheDocument();
    expect(screen.getByTestId('details')).toBeInTheDocument();
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(2);
  });

  it('renders NotFound component for an unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/random']}>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText('Sorry, the page is Not Found')).toBeInTheDocument();
  });
});
