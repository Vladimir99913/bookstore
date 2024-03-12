import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { requestNewCards, requestCards, ICardsProps, requestSearchCards } from '../services/card'
import { ICardNew, ICard } from '../types/types'

export const fetchNewCards = createAsyncThunk(
  'posts/fetchNewCards',
  async () => {
    const data = await requestNewCards()
    console.log(data)
    return data
  }
)

export const fetchCards = createAsyncThunk(
  'posts/fetchCards',
  async (isbn13:ICardsProps) => {
    const data = await requestCards(isbn13)
    console.log(data)
    return data
  }
)

export const fetchSearchCards = createAsyncThunk(
  'posts/fetchSearchCards',
  async (opts = {}) => {
    const {search, pageNumber = 1} = opts
    const data = await requestSearchCards({search, pageNumber})
    console.log(data)
    return data
  }
)

interface CardsState {
  newCards: ICardNew[],
  card: ICard[],
  cardFavorites: ICard[],
  cardSearch: ICard[],
  isLoading: boolean,
  error: null | string | undefined,
  pagesCounter: number,
  limit: number,
}


const initialState: CardsState = {
  newCards: [],
  card: {},
  cardFavorites: [],
  cardSearch: [],
  isLoading: false,
  error: null,
  pagesCounter:0,
  limit: 10,

}
// satisfies CardsState as CardsState
export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.newCards.map(item => {
       if(item.isbn13 == action.payload){
          state.cardFavorites.push(item)
       }
     })
   },
},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewCards.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchNewCards.fulfilled, (state, action: PayloadAction<ICardNew[]>) => {
        state.newCards = action.payload
      })
      .addCase(fetchNewCards.rejected, (state, action) => {
        state.error = action.error.message
        state.isLoading = false
      })

      .addCase(fetchCards.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchCards.fulfilled, (state, action: PayloadAction<ICard>) => {
        state.card = action.payload
        console.log(state.card)
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.error = action.error.message
        state.isLoading = false
      })

      .addCase(fetchSearchCards.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchSearchCards.fulfilled, (state, action) => {
        state.cardSearch = action.payload.books
        console.log(action.payload.books)
        // if(state.pagesCounter) return

        state.pagesCounter = Math.ceil(action.payload.total / state.limit)
        console.log(state.pagesCounter)
      })
      .addCase(fetchSearchCards.rejected, (state, action) => {
        state.error = action.error.message
        state.isLoading = false
      })
  }
})

export const { setFavorites } = cardsSlice.actions
export const cardsReducer = cardsSlice.reducer

