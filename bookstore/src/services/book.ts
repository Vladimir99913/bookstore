import { client } from "../utils/client";
import { booksNewEndpoint, booksEndpoint } from "../utils/api";
import { BookNew, Book } from "../types/types";

export interface Data {
  error: string,
  total: string,
  books: BookNew[] | Book[]
}

export interface BookProps {
  isbn13: string,
}

export interface BookSearchProps {
  search: string,
  pageNumber: string,
}

async function requestNewCards () {
  const {data} = await client.get<Data>(booksNewEndpoint)
  return data.books
}

async function requestCards (isbn13:string) {
  const {data} = await client.get<Book>(`${booksEndpoint}${isbn13}`)
  return data
}

async function requestSearchCards ({search, pageNumber}:BookSearchProps) {
  const {data} = await client.get(`/search/${search}/${pageNumber}`)
  console.log(data)
  return data
}

export {requestNewCards, requestCards, requestSearchCards}
