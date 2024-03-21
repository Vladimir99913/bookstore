import { Book, BookNew } from '../types/types';

export function getBookFavorite(): [] | Book[] {
  const localBookFavorite = localStorage.getItem('bookFavorites');

  if (!localBookFavorite) return [];

  const bookFavorite = JSON.parse(localBookFavorite);

  return bookFavorite;
}

export function getBookCart(): [] | Book[] {
  const localBookCart = localStorage.getItem('bookCart');

  if (!localBookCart) return [];

  const bookCart = JSON.parse(localBookCart);

  return bookCart;
}

export function getUserEmail(): [] | string[] {
  const localUserEmail = localStorage.getItem('userEmail');

  if (!localUserEmail) return [];

  const userEmail = JSON.parse(localUserEmail);

  return userEmail;
}
