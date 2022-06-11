import { useMemo } from 'react';
import { range } from '../utils';

export const usePagination = ({ totalCount, currentPage, pageSize }) => {
  
  const paginationRange = useMemo(() => {
    const totalPages = Math.ceil(totalCount / pageSize);
    return range(1, totalPages);
  }, [totalCount, pageSize, currentPage]);

  return paginationRange;
};
