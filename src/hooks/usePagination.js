import { useMemo } from 'react';
import { DOTS, range } from '../utils';

export const usePagination = ({
  totalCount,
  currentPage,
  pageSize,
  siblings = 1,
}) => {
  const paginationRange = useMemo(() => {
    const totalPages = Math.ceil(totalCount / pageSize);

    const totalPageNumbers = siblings + 5;

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblings, 1);
    const rightSiblingIndex = Math.min(currentPage + siblings, totalCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalCount;

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblings;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalCount];
    }

    /*
    	Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblings;
      let rightRange = range(totalCount - rightItemCount + 1, totalCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    /*
    	Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, currentPage, siblings]);

  return paginationRange;
};
