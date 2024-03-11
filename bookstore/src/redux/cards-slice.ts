import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { requestNewCards, requestCards, ICardsProps } from '../services/card'
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


interface CardsState {
  newCards: ICardNew[],
  card: ICard[],
  isLoading: boolean,
  error: null | string | undefined,
}


const initialState: CardsState = {
  newCards: [],
  card: [],
  isLoading: false,
  error: null,
}
// satisfies CardsState as CardsState
export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {

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
      .addCase(fetchCards.fulfilled, (state, action: PayloadAction<ICard[]>) => {
        state.card = action.payload
      })

      .addCase(fetchCards.rejected, (state, action) => {
        state.error = action.error.message
        state.isLoading = false
      })
  }
})

// export const { } = cardsSlice.actions
export const cardsReducer = cardsSlice.reducer

