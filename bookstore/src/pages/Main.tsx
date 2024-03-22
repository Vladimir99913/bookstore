import { useEffect } from 'react';
import { BookCardMain } from '../components/card/BookCardMain';
import { fetchNewCards } from '../redux/books-slice';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { Title } from '../components/Title';
import { ImagePreviewModal } from '../components/ImagePreviewModal';

export function Main() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.books.isLoading);
  const error = useAppSelector(state => state.books.error);
  const booksNew = useAppSelector(state => state.books.newBooks);

  useEffect(() => {
    dispatch(fetchNewCards());
  }, []);

  function renderContent() {
    if (error) {
      return <h1 className="text-danger">Error: {error}</h1>;
    }
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    return (
      <>
        <Title title="New reliase books" />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {booksNew.map((book, index) => (
            <BookCardMain key={index} {...book} />
          ))}
        </div>
      </>
    );
  }

  return <>{renderContent()}</>;
}
