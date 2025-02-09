import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { mockHeader } from './mockData';
import { MemoryRouter } from 'react-router';
import { describe, it, expect } from 'vitest';

describe('Header Component', () => {
  it('renders Search and Paginator components', () => {
    render(
      <MemoryRouter>
        <Header {...mockHeader} />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('search')).toBeInTheDocument();
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });
});
