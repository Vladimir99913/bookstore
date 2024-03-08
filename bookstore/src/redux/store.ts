import { configureStore } from '@reduxjs/toolkit/react'
import { cardsReducer } from './cards-slice'

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
