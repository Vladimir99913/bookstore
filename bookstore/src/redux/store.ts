import { configureStore } from '@reduxjs/toolkit/react'
import { cardsReducer } from './cards-slice'
import { tabsReducer } from './tabs-slice'

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    tabs: tabsReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
