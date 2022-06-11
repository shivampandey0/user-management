import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid';
import { usePagination } from '../../hooks/usePagination';
import { DOTS } from '../../utils';
import { PagePill } from './PagePill';

export const Pagination = ({
  onPageChange,
  totalCount,
  siblings,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblings,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className='flex items-center justify-center py-8'>
      <PagePill onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        <ChevronDoubleLeftIcon className='w-5 h-5' />
      </PagePill>

      <PagePill disabled={currentPage === 1} onClick={onPrevious}>
        <ChevronLeftIcon className='w-5 h-5' />
      </PagePill>

      {paginationRange.map((pageNum, idx) => {
        if (pageNum === DOTS) return <PagePill> &#8230;</PagePill>;

        return (
          <PagePill
            onClick={() => onPageChange(pageNum)}
            selected={pageNum === currentPage}
            key={idx}
          >
            {pageNum}
          </PagePill>
        );
      })}

      <PagePill disabled={currentPage === lastPage} onClick={onNext}>
        <ChevronRightIcon className='w-5 h-5' />
      </PagePill>

      <PagePill
        onClick={() => onPageChange(lastPage)}
        disabled={currentPage === lastPage}
      >
        <ChevronDoubleRightIcon className='w-5 h-5' />
      </PagePill>
    </ul>
  );
};
