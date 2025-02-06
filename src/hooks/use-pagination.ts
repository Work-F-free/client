import { useMemo } from 'react';

const usePagination = (
  totalItems: number,
  pageSize: number,
  currentPage: number
) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const pages = useMemo(() => {
    const maxPages = 7;

    if (totalPages <= maxPages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (currentPage <= 3) {
        return [1, 2, 3, 4, 5, '...', totalPages];
      } else if (currentPage >= totalPages - 2) {
        return [
          1,
          '...',
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      } else {
        return [
          1,
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages,
        ];
      }
    }
  }, [totalPages, currentPage]);

  return {
    currentPage,
    pages,
  };
};

export default usePagination;
