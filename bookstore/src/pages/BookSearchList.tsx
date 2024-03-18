import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { BookCardMain } from '../components/card/BookCardMain';
import { fetchSearchCards } from '../redux/books-slice';
import { useParams } from 'react-router-dom';
import { Pagination } from '../components/Pagination';

export function BookSearchList() {
  const isLoading = useAppSelector(state => state.books.isLoading);
  const error = useAppSelector(state => state.books.error);
  const dispatch = useAppDispatch();
  const { query, pageNumberCurrent } = useParams();
  // const { pageNumberCurrent } = useParams();
  // console.log(pageNumberCurrent);
  const pagesCounter = useAppSelector(state => state.books.pagesCounter);
  const data = useAppSelector(state => state.books.bookSearch);

  useEffect(() => {
    if (query && pageNumberCurrent) {
      dispatch(fetchSearchCards({ search: query, pageNumber: pageNumberCurrent }));
    }
  }, [dispatch, query, pageNumberCurrent]);

  function renderContent() {
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    if (error) {
      return <h1 className="text-danger">Error: {error}</h1>;
    }
    if (data.length == 0) {
      return <h1>No results were found for your request</h1>;
    }

    return (
      <>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((post, index) => (
            <BookCardMain key={index} {...post} />
          ))}
        </div>
        <nav>
          <ul className="pagination pagination-lg mt-3">
            <li className="page-item ">
              <span className="page-link">
                <i className="bi bi-arrow-left"></i>
              </span>
            </li>
            <Pagination pageNumberCurrent={pageNumberCurrent} pagesCounter={pagesCounter} url={`/posts/search/${query}/`} />
            <li className="page-item">
              <span className="page-link">
                <i className="bi bi-arrow-right"></i>
              </span>
            </li>
          </ul>
        </nav>
      </>
    );
  }

  return <>{renderContent()}</>;
}
