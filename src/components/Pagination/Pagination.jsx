import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid';
import { usePagination } from '../../hooks/usePagination';
import { PagePill } from './PagePill';

export const Pagination = ({
  onPageChange,
  totalCount,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className='flex items-center justify-center py-8 flex-wrap sm:flex-nowrap gap-1'>
      <PagePill onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        <ChevronDoubleLeftIcon className='w-5 h-5' />
      </PagePill>

      <PagePill disabled={currentPage === 1} onClick={onPrevious}>
        <ChevronLeftIcon className='w-5 h-5' />
      </PagePill>

      {paginationRange.map((pageNum, idx) => {
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
