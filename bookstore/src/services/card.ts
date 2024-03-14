import { client } from "../utils/client";
import { cardsNewEndpoint, cardsEndpoint } from "../utils/api";
import { ICardNew, ICard } from "../types/types";

interface IData {
  error: string,
  total: string,
  books: ICardNew[]
}

export interface ICardsProps {
  isbn13: string | undefined,
}

async function requestNewCards () {
  const {data} = await client.get<IData>(cardsNewEndpoint)
  return data.books
}

async function requestCards (isbn13:ICardsProps) {
  const {data} = await client.get(`/books/${isbn13}`)
  return data
}

async function requestSearchCards ({search, pageNumber}) {
  const {data} = await client.get(`/search/${search}/${pageNumber}`)
  return data
}

export {requestNewCards, requestCards, requestSearchCards}
