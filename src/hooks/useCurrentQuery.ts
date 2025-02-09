import { useSearchParams as searchParams } from 'react-router';

const useCurrentQuery = () => {
  const [searchParam] = searchParams();
  const search = searchParam.get('search') || '';
  const page = searchParam.get('page') || 1;

  return `/?search=${search}&page=${page}`;
};

export default useCurrentQuery;
