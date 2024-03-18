import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { requestNewCards, requestCards, Data, requestSearchCards } from '../services/book';
import { Book, BookNew } from '../types/types';
import { getBookCart, getBookFavorite } from '../utils/localStorage';

export const fetchNewCards = createAsyncThunk('posts/fetchNewCards', async (_, { rejectWithValue }) => {
  try {
    const data = await requestNewCards();
    if (!data) {
      throw new Error('Error');
    }
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const fetchCards = createAsyncThunk<Book, string>('posts/fetchCards', async (isbn13, { rejectWithValue }) => {
  try {
    const data = await requestCards(isbn13);
    if (!data) {
      throw new Error('Error');
    }
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

type Object = { search: string; pageNumber: string };
export const fetchSearchCards = createAsyncThunk<Data, Object>('posts/fetchSearchCards', async ({ search, pageNumber = '1' }, { rejectWithValue }) => {
  try {
    const data = await requestSearchCards({ search, pageNumber });
    if (!data) {
      throw new Error('Error');
    }
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
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
    setAddFavorites: (state, action) => {
      state.bookFavorites.unshift(state.book);
      localStorage.setItem('bookFavorites', JSON.stringify(state.bookFavorites));
    },
    setDeleteFavorites: (state, action) => {
      state.bookFavorites.map((item, index) => {
        if (item.isbn13 == action.payload) {
          state.bookFavorites.splice(index, 1);
        }
      });
      localStorage.setItem('bookFavorites', JSON.stringify(state.bookFavorites));
    },
    setBook: (state, action) => {
      state.book.count = 1;
      state.bookCart.unshift(state.book);
      localStorage.setItem('bookCart', JSON.stringify(state.bookCart));
    },
    setInkrement: (state, action) => {
      state.bookCart.map(item => {
        if (item.isbn13 == action.payload) {
          item.count = item.count + 1;
          console.log('yes');
        }
        console.log('no');
      });
      localStorage.setItem('bookCart', JSON.stringify(state.bookCart));
    },
    setDecrement: (state, action) => {
      state.bookCart.map(item => {
        if (item.isbn13 == action.payload) {
          item.count = item.count - 1;
        }
      });
      localStorage.setItem('bookCart', JSON.stringify(state.bookCart));
    },
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
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.book = action.payload;
        console.log(state.book);
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })

      .addCase(fetchSearchCards.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchSearchCards.fulfilled, (state, action: PayloadAction<Data>) => {
        console.log(action.payload.books);
        state.isLoading = false;
        state.bookSearch = action.payload.books;

        state.pagesCounter = Math.ceil(Number(action.payload.total) / state.limit);
      })
      .addCase(fetchSearchCards.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export const { setAddFavorites, setDeleteFavorites, setBook, setInkrement, setDecrement } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
