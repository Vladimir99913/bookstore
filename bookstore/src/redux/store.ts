import { configureStore } from '@reduxjs/toolkit/react';
import { booksReducer } from './books-slice';
import { tabsReducer } from './tabs-slice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    tabs: tabsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
