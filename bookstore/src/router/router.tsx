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
        element: <Main />
      },
      {
        path: '/posts/:isbn13',
        element: <Book />
      },
      // {
      //   path: '/posts/page/:pageNumber',
      //   element: <CardList />
      // },
      // {
      //   path: '/sign-in',
      //   element: <FormSignIn />
      // },
      // {
      //   path: '/sign-up',
      //   element: <FormSignUp />
      // },
      {
        path: '/posts/search/:query/:pageNumberCurrent',
        element: <BookSearchList />
      },
      {
        path: '/favorites',
        element: <BookFavoriteList />
      },
      {
        path: '/cart',
        element: <BookCartList />
      },
    ]
  }
])
