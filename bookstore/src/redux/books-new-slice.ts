import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';
import { requestNewCards } from '../services/book';
import { BookNew } from '../types/types';
import { call, put, select } from 'redux-saga/effects';

export function* fetchNewCardsSaga() {
  yield put(setLoading(true));
  try {
    const data: BookNew[] = yield call(requestNewCards);
    yield put(getPostsSuccess(data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    if (error instanceof Error) {
      yield put(setError(error.message));
    }
    yield put(setError('Something went wrong'));
  }
}

interface BookState {
  newBooks: BookNew[];
  isLoading: boolean;
  error: null | string | undefined;
}

const initialState: BookState = {
  newBooks: [],
  isLoading: false,
  error: null,
};

export const booksNewSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getPostsSuccess: (state, action: PayloadAction<BookNew[]>) => {
      state.newBooks = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

// Actions
export const FETCH_BOOKS = 'books/fetchNewCards';
export const fetchNewCards = createAction(FETCH_BOOKS);

export const { getPostsSuccess, setLoading, setError } = booksNewSlice.actions;
export const booksNewReducer = booksNewSlice.reducer;
