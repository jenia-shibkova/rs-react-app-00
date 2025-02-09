import { JSX } from 'react';
import { PaginationProps } from './types.ts';
import useSearchParams from '../../hooks/useSearchParams';
import CustomLink from '../CustomLink/index.tsx';
import './styles.css';

const Pagination = ({ total, offset, handleNext }: PaginationProps): JSX.Element => {
  const [search] = useSearchParams();
  const currentPage = offset / 10 + 1;
  const totalPages = Math.ceil(total / 10);

  const maxVisiblePages = 5;
  const halfRange = Math.floor(maxVisiblePages / 2);
  const getPageNumbers = () => {
    if (totalPages <= maxVisiblePages) {
      return [...Array.from({ length: totalPages }, (_, i) => i + 1)];
    }

    if (currentPage <= halfRange + 1) {
      return [...Array(maxVisiblePages)].map((_, i) => i + 1).concat([totalPages]);
    }

    if (currentPage >= totalPages - halfRange) {
      return [1, '...'].concat(
        [...Array(maxVisiblePages)].map((_, i) => totalPages - maxVisiblePages + i + 1),
      );
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  const resultPages = ['prev', ...getPageNumbers(), 'next'];

  return (
    <div className="pagination" data-testid="paginator">
      {resultPages.map((item, index) => {
        if (item === 'prev') {
          return (
            <CustomLink
              key={`${item}-${index}`}
              search={`?search=${search}&page=${currentPage <= 1 ? 1 : currentPage - 1}`}
              pageSwitch={handleNext}
              item={'prev'}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          );
        }
        if (item === 'next') {
          return (
            <CustomLink
              key={`${item}-${index}`}
              search={`?search=${search}&page=${currentPage > totalPages ? currentPage : currentPage + 1}`}
              pageSwitch={handleNext}
              item={'next'}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          );
        }
        return (
          <CustomLink
            key={`${item}-${index}`}
            search={`?search=${search}&page=${item === '...' ? currentPage : item}`}
            pageSwitch={handleNext}
            item={item}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        );
      })}
    </div>
  );
};

export default Pagination;
