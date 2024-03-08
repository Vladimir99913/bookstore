import { client } from "../utils/client";
import { cardsNewEndpoint, cardsEndpoint } from "../utils/api";
import { ICardNew } from "../types/types";

interface IData {
  error: string,
  total: string,
  books: ICardNew[]
}

async function requestNewCards () {
  const {data} = await client.get<IData>(cardsNewEndpoint)
  console.log(data)
  return data.books
}

async function requestCards () {
  const {data} = await client.get(cardsEndpoint)
  console.log(data)
  return data
}

export {requestNewCards, requestCards}
