export interface ICardNew {
  title: string,
  subtitle: string,
  isbn13: string,
  price: string,
  image: string,
  url: string,
}

export interface IPdf {
  "Chapter 2": string,
  "Chapter 5": string
}

export interface ICard {
  error: string,
  title: string,
  subtitle: string,
  authors: string,
  publisher: string,
  isbn10: string,
  isbn13: string,
  language: string,
  pages: string,
  year: string,
  rating: string,
  desc: string,
  price: string,
  image: string,
  url: string,
  pdf: IPdf,
  count?: any,
}
