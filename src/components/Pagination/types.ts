export interface ListData {
  total_count: number;
  incomplete_results: boolean;
  items: [object];
}

export interface PaginationProps {
  handlePrev: () => void;
  handleNext: () => void;
}
