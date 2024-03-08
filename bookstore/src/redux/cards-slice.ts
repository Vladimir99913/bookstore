import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestNewCards, requestCards } from '../services/card'
import { ICardNew } from '../types/types'

export const fetchNewCards = createAsyncThunk(
  'posts/fetchNewCards',
  async () => {
    const data = await requestNewCards()
    console.log(data)
    return data
  }
)

interface CardsState {
  newCards: ICardNew[],
  isLoading: boolean,
  error: null | string | undefined,
}

const initialState: CardsState = {
  newCards: [],
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
      .addCase(fetchNewCards.fulfilled, (state, action) => {
        state.newCards = action.payload
      })

      .addCase(fetchNewCards.rejected, (state, action) => {
        state.error = action.error.message
        state.isLoading = false
      })
  }
})

// export const { } = cardsSlice.actions
export const cardsReducer = cardsSlice.reducer

