import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { BookCardFavorite } from '../components/card/BookCardFavorite';
import { Title } from '../components/Title';
import { SimilarBooks } from '../components/SimilarBooks';
import { fetchNewCards } from '../redux/books-new-slice';

export function BookFavoriteList() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.books.isLoading);
  const error = useAppSelector(state => state.books.error);
  const isLoadingNewBooks = useAppSelector(state => state.booksNew.isLoading);
  const errorNewBooks = useAppSelector(state => state.booksNew.error);
  const booksFavorites = useAppSelector(state => state.books.bookFavorites);
  const booksNew = useAppSelector(state => state.booksNew.newBooks);

  useEffect(() => {
    dispatch(fetchNewCards());
  }, []);

  function renderContent() {
    if (error || errorNewBooks) {
      return <h1 className="text-danger">Error: {errorNewBooks}</h1>;
    }
    if (isLoading || isLoadingNewBooks) {
      return <h1>Loading...</h1>;
    }
    if (booksFavorites.length == 0) {
      return (
        <>
          <h1 className="mb-5">You don't have any favorite book yet</h1>
          <SimilarBooks book={booksNew} title="Check out the new book" />
        </>
      );
    }
    return (
      <>
        <Title title="Favorites" />
        {booksFavorites.map((book, index) => (
          <BookCardFavorite key={index} {...book} />
        ))}
      </>
    );
  }
  return <>{renderContent()}</>;
}
