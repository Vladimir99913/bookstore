import { configureStore } from '@reduxjs/toolkit/react';
import { booksReducer } from './books-slice';
import { tabsReducer } from './tabs-slice';
import { subscribReducer } from './subscribe-slice';
import { modalReducer } from './modal-slice';
import { booksNewReducer, FETCH_BOOKS, fetchNewCardsSaga } from './books-new-slice';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';

function* sagas() {
  yield takeEvery(FETCH_BOOKS, fetchNewCardsSaga);
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    books: booksReducer,
    tabs: tabsReducer,
    subscribe: subscribReducer,
    modal: modalReducer,
    booksNew: booksNewReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
});

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
