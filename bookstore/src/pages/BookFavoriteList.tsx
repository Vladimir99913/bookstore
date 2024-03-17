import { useAppSelector } from '../hooks/hooks';
import { BookCardFavorite } from '../components/card/BookCardFavorite';

export function BookFavoriteList() {
  const booksFavorites = useAppSelector(state => state.books.bookFavorites);

  return (
    <>
      {booksFavorites.map((post, index) => (
        <BookCardFavorite key={index} {...post} />
      ))}
    </>
  );
}
