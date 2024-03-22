import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { BookCardMain } from '../components/card/BookCardMain';
import { fetchSearchCards } from '../redux/books-slice';
import { useParams, useNavigate } from 'react-router-dom';
import { Pagination } from '../components/Pagination';
import { Title } from '../components/Title';

export function BookSearchList() {
  const navigate = useNavigate();
  const isLoading = useAppSelector(state => state.books.isLoading);
  const error = useAppSelector(state => state.books.error);
  const dispatch = useAppDispatch();
  const { query, pageNumberCurrent } = useParams<{ query: string; pageNumberCurrent: string }>();
  const pagesCounter = useAppSelector(state => state.books.pagesCounter);
  const data = useAppSelector(state => state.books.bookSearch);

  useEffect(() => {
    if (query && pageNumberCurrent) {
      dispatch(fetchSearchCards({ search: query, pageNumber: pageNumberCurrent }));
    }
  }, [dispatch, query, pageNumberCurrent]);

  function handleClickNextPage() {
    const page: number | undefined = Number(pageNumberCurrent);
    const next: number = Number(page) + 1;
    navigate(`/books/search/${query}/${next}`);
  }

  function handleClickPrevPage() {
    const page: number | undefined = Number(pageNumberCurrent);
    const prev: number = Number(page) - 1;
    navigate(`/books/search/${query}/${prev}`);
  }

  function renderContent() {
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    if (error) {
      return <h1 className="text-danger">Error: {error}</h1>;
    }
    if (data.length == 0) {
      return (
        <>
          <Title title={`"${query} "  Search results`} />
          <h1>No results were found for your request</h1>;
        </>
      );
    }

    return (
      <>
        <Title title={`"${query} "  Search results`} />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((post, index) => (
            <BookCardMain key={index} {...post} />
          ))}
        </div>
        <nav className="w-100">
          <ul className="pagination pagination-lg mt-3 w-100 justify-content-between ">
            <li className="page-item ">
              <button className="page-link" {...{ disabled: Number(pageNumberCurrent) == 1 }} onClick={handleClickPrevPage}>
                <i className="bi bi-arrow-left"></i>
              </button>
            </li>
            <ul className="pagination pagination-lg d-flex">
              <Pagination pageNumberCurrent={pageNumberCurrent as string} pagesCounter={pagesCounter} url={`/books/search/${query}/`} />
            </ul>
            <li className="page-item">
              <button className="page-link" {...{ disabled: Number(pageNumberCurrent) == Number(pagesCounter) }} onClick={handleClickNextPage}>
                <i className="bi bi-arrow-right"></i>
              </button>
            </li>
          </ul>
        </nav>
      </>
    );
  }

  return <>{renderContent()}</>;
}
