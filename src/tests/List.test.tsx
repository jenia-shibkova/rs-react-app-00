import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { List } from '../components';
import { mockMarvelItem, mockList } from './mockData.ts';

vi.mock('../components/Card/index.tsx', () => ({
  default: vi.fn(() => <div data-testid="card" />),
}));
vi.mock('../components/Loader/index.tsx', () => ({
  default: vi.fn(() => <div data-testid="loader" />),
}));

describe('CardList Component', () => {
  it('renders a spinner when loading', () => {
    render(<List {...mockList} isFetching={true} />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('renders no results message when results are empty', () => {
    render(<List {...mockList} items={[]} isFetching={false} />);
    expect(screen.getByText('No heroes found.')).toBeInTheDocument();
  });

  it('renders a list of cards when results are provided', () => {
    render(<List {...mockList} isFetching={false} items={[mockMarvelItem, mockMarvelItem]} />);
    expect(screen.getAllByTestId('card')).toHaveLength(2);
  });
});
