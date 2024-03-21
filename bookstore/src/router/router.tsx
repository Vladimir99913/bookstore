import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Main } from '../pages/Main';
import { Book } from '../pages/Book';
import { BookSearchList } from '../pages/BookSearchList';
import { BookFavoriteList } from '../pages/BookFavoriteList';
import { BookCartList } from '../pages/BookCartList';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/books/:isbn13',
        element: <Book />,
      },
      {
        path: '/books/search/:query/:pageNumberCurrent',
        element: <BookSearchList />,
      },
      {
        path: '/favorites',
        element: <BookFavoriteList />,
      },
      {
        path: '/cart',
        element: <BookCartList />,
      },
    ],
  },
]);
