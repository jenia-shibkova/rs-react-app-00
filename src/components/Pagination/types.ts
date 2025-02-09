export interface ListData {
  total_count: number;
  incomplete_results: boolean;
  items: [object];
}

export interface PaginationProps {
  total: number;
  offset: number;
  handleNext: (page: number) => void;
}
