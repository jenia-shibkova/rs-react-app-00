import { Link } from 'react-router';
import styles from './styles.module.css';
import clsx from 'clsx';
import { CustomLinkProps } from './types.ts';
import useSearchParams from '../../hooks/useSearchParams.ts';

const CustomLink = ({
  search,
  pageSwitch,
  item,
  currentPage,
  totalPages,
}: CustomLinkProps): JSX.Element => {
  const [_, page] = useSearchParams();

  const isPrevValue = item === 'prev';
  const isNextValue = item === 'next';

  console.log('search value', _);

  const disabled =
    (currentPage > totalPages - 1 && isNextValue) || (isPrevValue && currentPage <= 1);
  return (
    <Link
      data-testid="link"
      to={{ pathname: '/', search }}
      className={clsx(styles.button, disabled && styles.inactive, page == item && styles.active)}
      onClick={(e) => {
        if (disabled) {
          return e.preventDefault();
        }

        switch (item) {
          case '...': {
            pageSwitch(currentPage);
            return;
          }
          case 'prev': {
            const newValue = currentPage <= 1 ? currentPage : currentPage - 1;
            pageSwitch(newValue);
            return;
          }
          case 'next': {
            const newValue = currentPage > totalPages - 1 ? currentPage : currentPage + 1;
            pageSwitch(newValue);
            return;
          }

          default: {
            pageSwitch(Number(item));
          }
        }
      }}
    >
      {item}
    </Link>
  );
};

export default CustomLink;
