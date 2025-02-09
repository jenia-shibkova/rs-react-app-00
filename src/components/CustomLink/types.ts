export interface CustomLinkProps {
  search?: string;
  pageSwitch: (page: number) => void;
  item: number | string;
  currentPage: number;
  totalPages: number;
}
