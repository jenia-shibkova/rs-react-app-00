import { useSearchParams as searchParams } from 'react-router';

const useSearchParams = () => {
  const [searchParam] = searchParams();
  const search = searchParam.get('search') || '';
  const page = searchParam.get('page') || 1;
  return [search, page];
};

export default useSearchParams;
