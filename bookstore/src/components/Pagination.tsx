import { NavLink } from 'react-router-dom';

interface PaginationProps {
  pagesCounter: number;
  pageNumberCurrent: string;
  url: string;
}

export function Pagination(props: PaginationProps) {
  const pagesCounter = props.pagesCounter;

  function buildPaginationScheme() {
    const prevPageNumber = +props.pageNumberCurrent - 1;
    const nextPageNumber = +props.pageNumberCurrent + 1;
    const scheme = [1, prevPageNumber, +props.pageNumberCurrent, nextPageNumber, pagesCounter];
    const filteredScheme = scheme.filter(item => item > 0 && item <= pagesCounter);
    const set = new Set(filteredScheme);
    const result: any[] = Array.from(set);

    if (pagesCounter > 3) {
      if (result[0] + 1 !== result[1]) result.splice(1, 0, '...');
      if (result[result.length - 2] + 1 !== result[result.length - 1]) result.splice(result.length - 1, 0, '...');
    }

    return result;
  }

  function renderPagination() {
    const paginationScheme = buildPaginationScheme();

    return paginationScheme.map((pageNumber, index) => {
      if (pageNumber == '...') {
        return (
          <li className="page-item" key={index}>
            <span className="page-link pe-none">{pageNumber}</span>
          </li>
        );
      }

      return (
        <li className="page-item" key={index}>
          <NavLink to={`${props.url}${pageNumber}`} className={({ isActive }) => (isActive ? 'page-link active' : 'page-link')}>
            {pageNumber}
          </NavLink>
        </li>
      );
    });
  }
  return renderPagination();
}
