import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { requestNewCards, requestCards, ICardsProps, requestSearchCards } from '../services/card'
import { ICardNew, ICard } from '../types/types'
import { getBookCart, getBookFavorite } from '../utils/localStorage'

export const fetchNewCards = createAsyncThunk(
  'posts/fetchNewCards',
  async () => {
    const data = await requestNewCards()
    return data
  }
)

export const fetchCards = createAsyncThunk(
  'posts/fetchCards',
  async (isbn13:ICardsProps) => {
    const data = await requestCards(isbn13)
    return data
  }
)

export const fetchSearchCards = createAsyncThunk(
  'posts/fetchSearchCards',
  async (opts = {}) => {
    const {search, pageNumber = 1} = opts
    const data = await requestSearchCards({search, pageNumber})
    return data
  }
)

interface CardsState {
  newCards: ICardNew[],
  card: ICard[],
  cardFavorites: ICard[],
  cardSearch: ICard[],
  cardCart: ICard[],
  isLoading: boolean,
  error: null | string | undefined,
  pagesCounter: number,
  limit: number,
}


const initialState: CardsState = {
  newCards: [],
  card: {},
  cardFavorites: getBookFavorite(),
  cardSearch: [],
  cardCart: getBookCart(),
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
    setAddFavorites: (state, action) => {
      state.cardFavorites.unshift(state.card)
      localStorage.setItem('bookFavorites', JSON.stringify(state.cardFavorites))
   },
   setDeleteFavorites: (state, action) => {
    state.cardFavorites.map((item, index) => {
      if(item.isbn13 == action.payload){
        state.cardFavorites.splice(index, 1)
      }
    })
    localStorage.setItem('bookFavorites', JSON.stringify(state.cardFavorites))
 },
    setCart: (state, action) => {
      state.card.count = 1
      state.cardCart.unshift(state.card)
      localStorage.setItem('bookCart', JSON.stringify(state.cardCart))
    },
    setInkrement: (state, action) => {
      state.cardCart.map(item => {
        if(item.isbn13 == action.payload){
          item.count = item.count + 1
          console.log('yes')
        }
        console.log('no')
      })
      localStorage.setItem('bookCart', JSON.stringify(state.cardCart))
    },
    setDecrement: (state, action) => {
      state.cardCart.map(item => {
        if(item.isbn13 == action.payload){
          item.count = item.count - 1
        }
      })
      localStorage.setItem('bookCart', JSON.stringify(state.cardCart))
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

        // if(state.pagesCounter) return

        state.pagesCounter = Math.ceil(action.payload.total / state.limit)

      })
      .addCase(fetchSearchCards.rejected, (state, action) => {
        state.error = action.error.message
        state.isLoading = false
      })
  }
})

export const { setAddFavorites, setDeleteFavorites, setCart, setInkrement, setDecrement } = cardsSlice.actions
export const cardsReducer = cardsSlice.reducer

