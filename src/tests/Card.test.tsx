import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Card } from '../components';
import { describe, it, expect, beforeEach } from 'vitest';
import { mockCard } from './mockData.ts';

describe('Card Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Card {...mockCard} />
      </MemoryRouter>,
    );
  });

  it('renders with provided props', () => {
    const nameElement = screen.getByTestId('name');
    expect(nameElement.tagName).toBe('H3');
    expect(screen.getByText(mockCard.name)).toBeInTheDocument();

    const nameElementComics = screen.getByTestId('comics');
    expect(nameElementComics.tagName).toBe('SPAN');

    const nameElementSeries = screen.getByTestId('series');
    expect(nameElementSeries.tagName).toBe('SPAN');

    const nameElementStories = screen.getByTestId('stories');
    expect(nameElementStories.tagName).toBe('SPAN');
  });

  it('renders correct NavLink path', () => {
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href');
    expect(linkElement.tagName).toBe('A');
  });
});
