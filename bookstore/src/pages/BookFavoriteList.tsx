import { useAppSelector } from '../hooks/hooks';
import { BookCardFavorite } from '../components/card/BookCardFavorite';
import { Title } from '../components/Title';

export function BookFavoriteList() {
  const isLoading = useAppSelector(state => state.books.isLoading);
  const error = useAppSelector(state => state.books.error);
  const booksFavorites = useAppSelector(state => state.books.bookFavorites);

  function renderContent() {
    if (error) {
      return <h1 className="text-danger">Error: {error}</h1>;
    }
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    if (booksFavorites.length == 0) {
      return <h1>You haven't added books</h1>;
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
