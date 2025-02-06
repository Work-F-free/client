import { ArrowLeft, ArrowRight } from 'lucide-react';
 

import { PaginationItem } from '.';
import { cn } from '@/lib/shadcn/utils';
import usePagination from '@/hooks/use-pagination';

interface Props {
  currentPage: number;
  onCurrentPageChange: (page: number) => void;

  totalItems: number;
  pageSize: number;
}

export const Pagination: React.FC<Props> = ({
  totalItems,
  pageSize,
  currentPage,
  onCurrentPageChange,
}) => {
  const { pages } = usePagination(totalItems, pageSize, currentPage);

  return (
    <div className="flex gap-1 sm:gap-3">
      <button
        onClick={() => onCurrentPageChange(--currentPage)}
        disabled={currentPage === 1}
      >
        <ArrowLeft
          className={cn('text-primary cursor-pointer hover:text-gray-600', {
            'text-gray-400 hover:text-gray-400': currentPage === 1,
          })}
        />
      </button>
      {pages.map((page, index) => (
        <PaginationItem
          key={index}
          value={String(page)}
          onClick={() => typeof page === 'number' && onCurrentPageChange(page)}
          disabled={page === '...'}
          currentPage={currentPage === page}
        />
      ))}
      <button
        onClick={() => onCurrentPageChange(++currentPage)}
        disabled={currentPage === Math.ceil(totalItems / pageSize)}
      >
        <ArrowRight
          className={cn('text-primary cursor-pointer hover:text-gray-600', {
            'text-gray-400 hover:text-gray-400':
              currentPage === Math.ceil(totalItems / pageSize),
          })}
        />
      </button>
    </div>
  );
};
