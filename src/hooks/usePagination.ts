import { useMemo } from 'react';

export const dotsLeft = 'left';
export const dotsRight = 'right';

const range = (start, end) => {
  const length = end - start + 1;

  return Array.from({ length }, (_, idx) => idx + start);
};

type Props = {
  totalCount: number
  pageSize: number
  siblingCount: number
  currentPage: number
}

export const usePagination = ({
  totalCount = 1,
  pageSize = 20,
  siblingCount = 1,
  currentPage = 1,
}: Props) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount,
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, dotsRight, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount,
      );
      return [firstPageIndex, dotsRight, ...rightRange];
    }

    const middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, dotsLeft, ...middleRange, dotsRight, lastPageIndex];
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};

export default usePagination;
