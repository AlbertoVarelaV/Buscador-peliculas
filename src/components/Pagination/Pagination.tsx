import React from 'react';
import classnames from 'classnames';

import { usePagination, dotsLeft, dotsRight } from '../../hooks/usePagination.ts';

type Props = {
  onPageChange: () => void
  totalCount: number
  siblingCount: number
  currentPage: number
  pageSize: number
  className: string
}

export function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}: Props) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
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
    <nav className="text-center">
      <ul
        className={classnames('pagination  justify-content-center', { [className]: className })}
      >
        <li className={classnames('page-item', {
          disabled: currentPage === 1,
        })}
        >
          <button
            type="button"
            className="page-link"
            onClick={onPrevious}
          >
            Anterior
          </button>
        </li>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === dotsLeft) {
            return <li key="pagination_left" className="page-item disabled"><div className="page-link">&#8230;</div></li>;
          }

          if (pageNumber === dotsRight) {
            return <li key="pagination_right" className="page-item disabled"><div className="page-link">&#8230;</div></li>;
          }

          return (
            <li
              key={`pagination_${pageNumber}`}
              className={classnames('page-item', {
                active: pageNumber === currentPage,
              })}
            >
              <button
                type="button"
                className="page-link"
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}
        <li className={classnames('page-item', {
          disabled: currentPage === lastPage,
        })}
        >
          <button
            type="button"
            className={classnames('page-link', {
              disabled: currentPage === lastPage,
            })}
            onClick={onNext}
          >
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
