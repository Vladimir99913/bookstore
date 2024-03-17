export function getBookFavorite() {
  const localBookFavorite = localStorage.getItem('bookFavorites');

  if (!localBookFavorite) return [];

  const bookFavorite = JSON.parse(localBookFavorite);

  return bookFavorite;
}

export function getBookCart() {
  const localBookCart = localStorage.getItem('bookCart');

  if (!localBookCart) return [];

  const bookCart = JSON.parse(localBookCart);

  return bookCart;
}
