'use client';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './Pagination';
import { useState } from 'react';

export const usePagination = ({ list, limit }: { list: any[]; limit: number }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const limitCount = limit ? limit : 10;
  const total = list.length;
  const totalPage = Math.ceil(total / limitCount);

  const paginationList =
    list.length > limitCount
      ? list.slice((currentPage - 1) * limitCount, currentPage * limitCount)
      : list;

  const setPage = (page: number) => {
    if (page < 1) page = 1;
    if (page > totalPage) page = totalPage;
    setCurrentPage(page);
  };

  const render = () => {
    if (list.length === 0) return null;

    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPage, currentPage + 1);

    // 현재 페이지가 1인 경우 1, 2, 3...totalPage로 설정
    if (currentPage === 1) {
      startPage = 1;
      endPage = Math.min(totalPage, 3);
    }

    // 현재 페이지가 2인 경우 1, 2, 3...totalPage로 설정
    if (currentPage === 2) {
      startPage = 1;
      endPage = Math.min(totalPage, 4);
    }

    // 현재 페이지가 마지막 페이지 근처인 경우
    if (currentPage >= totalPage - 1) {
      startPage = Math.max(1, totalPage - 2);
      endPage = totalPage;
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setPage(currentPage - 1)}
              className={currentPage === 1 ? 'cursor-not-allowed' : ''}
            />
          </PaginationItem>
          {startPage > 1 && (
            <>
              <PaginationItem>
                <PaginationLink onClick={() => setPage(1)}>1</PaginationLink>
              </PaginationItem>
              {startPage > 2 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
            </>
          )}
          {pageNumbers.map(pageNumber => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                isActive={pageNumber === currentPage}
                onClick={() => setPage(pageNumber)}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}
          {endPage < totalPage && (
            <>
              {endPage < totalPage - 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationLink onClick={() => setPage(totalPage)}>
                  {totalPage}
                </PaginationLink>
              </PaginationItem>
            </>
          )}
          <PaginationItem>
            <PaginationNext
              onClick={() => setPage(currentPage + 1)}
              className={currentPage === totalPage ? 'cursor-not-allowed' : ''}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  };

  return {
    render,
    paginationList,
  };
};
