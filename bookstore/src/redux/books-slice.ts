import { createSlice, createAsyncThunk, PayloadAction, createAction } from '@reduxjs/toolkit';
import { requestNewCards, requestCards, Data, requestSearchCards } from '../services/book';
import { Book, BookNew } from '../types/types';
import { getBookCart, getBookFavorite } from '../utils/localStorage';
import { call, put, select } from 'redux-saga/effects';

// export function* fetchNewCardsSaga() {
//   yield put(setLoading(true));
//   try {
//     const data: BookNew[] = yield call(requestNewCards);
//     yield put(getPostsSuccess(data));
//     yield put(setLoading(false));
//   } catch (error) {
//     yield put(setError(error));
//     yield put(setLoading(false));
//   }
// }

export const fetchNewCards = createAsyncThunk<BookNew[], undefined, { rejectValue: string }>('books/fetchNewCards', async (_, { rejectWithValue }) => {
  try {
    const data = await requestNewCards();
    if (!data) {
      throw new Error('Error');
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Something went wrong');
  }
});

export const fetchCards = createAsyncThunk<Book, string, { rejectValue: string }>('books/fetchCards', async (isbn13, { rejectWithValue }) => {
  try {
    const data = await requestCards(isbn13);
    if (!data) {
      throw new Error('Error');
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Something went wrong');
  }
});

type Object = { search: string; pageNumber: string };
export const fetchSearchCards = createAsyncThunk<Data, Object, { rejectValue: string }>('books/fetchSearchCards', async ({ search, pageNumber = '1' }, { rejectWithValue }) => {
  try {
    const data = await requestSearchCards({ search, pageNumber });
    if (!data) {
      throw new Error('Error');
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Something went wrong');
  }
});

interface BookState {
  newBooks: BookNew[];
  book: Book;
  bookFavorites: Book[];
  bookSearch: BookNew[];
  bookCart: Book[];
  isLoading: boolean;
  error: null | string | undefined;
  pagesCounter: number;
  limit: number;
}

const initialState: BookState = {
  newBooks: [],
  book: {} as Book,
  bookFavorites: getBookFavorite(),
  bookSearch: [],
  bookCart: getBookCart(),
  isLoading: false,
  error: null,
  pagesCounter: 0,
  limit: 10,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setAddFavorites: state => {
      state.bookFavorites.unshift(state.book);
      localStorage.setItem('bookFavorites', JSON.stringify(state.bookFavorites));
    },
    setDeleteFavorites: (state, action: PayloadAction<string>) => {
      state.bookFavorites.map((item, index) => {
        if (item.isbn13 == action.payload) {
          state.bookFavorites.splice(index, 1);
        }
      });
      localStorage.setItem('bookFavorites', JSON.stringify(state.bookFavorites));
    },
    setBook: state => {
      state.book.count = 1;
      state.bookCart.unshift(state.book);
      localStorage.setItem('bookCart', JSON.stringify(state.bookCart));
    },
    setInkrement: (state, action: PayloadAction<string>) => {
      state.bookCart.map(item => {
        if (item.isbn13 == action.payload) {
          item.count = (item.count as number) + 1;
        }
      });
      localStorage.setItem('bookCart', JSON.stringify(state.bookCart));
    },
    setDecrement: (state, action: PayloadAction<string>) => {
      state.bookCart.map(item => {
        if (item.isbn13 == action.payload) {
          item.count = (item.count as number) - 1;
        }
      });
      localStorage.setItem('bookCart', JSON.stringify(state.bookCart));
    },
    setDeleteBookCart: (state, action: PayloadAction<string>) => {
      state.bookCart.map((item, index) => {
        if (item.isbn13 == action.payload) {
          state.bookCart.splice(index, 1);
        }
      });
      localStorage.setItem('bookCart', JSON.stringify(state.bookCart));
    },
    setDeleteAllBookCart: state => {
      state.bookCart = [];
      localStorage.setItem('bookCart', JSON.stringify(state.bookCart));
    },

    // getPostsSuccess: (state, action) => {
    //   state.newBooks = action.payload;
    // },
    // setLoading: (state, action) => {
    //   state.isLoading = action.payload;
    // },
    // setError: (state, action) => {
    //   state.error = action.payload;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNewCards.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchNewCards.fulfilled, (state, action: PayloadAction<BookNew[]>) => {
        state.isLoading = false;
        state.newBooks = action.payload;
      })
      .addCase(fetchNewCards.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })

      .addCase(fetchCards.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCards.fulfilled, (state, action: PayloadAction<Book>) => {
        state.isLoading = false;
        state.book = action.payload;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })

      .addCase(fetchSearchCards.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchSearchCards.fulfilled, (state, action: PayloadAction<Data>) => {
        state.isLoading = false;
        state.bookSearch = action.payload.books;

        state.pagesCounter = Math.round(Number(action.payload.total) / state.limit);
      })
      .addCase(fetchSearchCards.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

// Actions
// export const FETCH_BOOKS = 'books/fetchNewCards';
// export const fetchNewCards = createAction(FETCH_BOOKS);

export const { setAddFavorites, setDeleteFavorites, setBook, setInkrement, setDecrement, setDeleteBookCart, setDeleteAllBookCart } = booksSlice.actions;
// export const { setAddFavorites, setDeleteFavorites, setBook, setInkrement, setDecrement, setDeleteBookCart, setDeleteAllBookCart, getPostsSuccess, setLoading, setError } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
