import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { BookCardFavorite } from '../components/card/BookCardFavorite';
import { Title } from '../components/Title';
import { SimilarBooks } from '../components/SimilarBooks';
import { fetchNewCards } from '../redux/books-slice';

export function BookFavoriteList() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.books.isLoading);
  const error = useAppSelector(state => state.books.error);
  const booksFavorites = useAppSelector(state => state.books.bookFavorites);
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
    if (booksFavorites.length == 0) {
      return (
        <>
          <h1 className="mb-5">You don't have any favorite book yet</h1>
          <SimilarBooks book={booksNew} title="New book" />
        </>
      );
    }
    return (
      <>
        <Title title="Favorites" />
        {booksFavorites.map((post, index) => (
          <BookCardFavorite key={index} {...post} />
        ))}
      </>
    );
  }
  return <>{renderContent()}</>;
}
