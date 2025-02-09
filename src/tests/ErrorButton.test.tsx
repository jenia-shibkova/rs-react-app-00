import { describe, it, expect, vi } from 'vitest';
import { ErrorButton, ErrorBoundary } from '../components';
import { fireEvent, render, screen } from '@testing-library/react';

describe('ErrorButton Component', () => {
  it('renders correctly', () => {
    render(<ErrorButton />);
    const button = screen.getByText('Throw Error');
    expect(button).toBeInTheDocument();
  });

  it('throws an error when clicked', () => {
    console.error = vi.fn();

    render(
      <ErrorBoundary>
        <ErrorButton />
      </ErrorBoundary>,
    );

    const button = screen.getByText('Throw Error');
    fireEvent.click(button);

    const resetBtn = screen.getByTestId('close');
    expect(resetBtn.textContent).toBe('Close');
    expect(resetBtn).toBeInTheDocument();
    fireEvent.click(resetBtn);
    expect(resetBtn).not.toBeInTheDocument();
    expect(console.error).toHaveBeenCalled();
  });
});
