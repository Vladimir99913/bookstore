import { configureStore } from '@reduxjs/toolkit/react';
import { booksReducer } from './books-slice';
import { tabsReducer } from './tabs-slice';
import { subscribReducer } from './subscribe-slice';
import { modalReducer } from './modal-slice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    tabs: tabsReducer,
    subscribe: subscribReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
