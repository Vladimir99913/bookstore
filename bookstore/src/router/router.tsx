import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { Main } from '../pages/Main';
import { CardPost } from '../pages/CardPost';
import { CardSearchList } from '../pages/CardSearchList';
import { CardFavoritesList } from '../pages/CardFavoritesList';
import { CardCartList } from '../pages/CardCartList';

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
        element: <CardPost />
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
        path: '/posts/search/:query/:pageNumber',
        element: <CardSearchList />
      },
      {
        path: '/favorites',
        element: <CardFavoritesList />
      },
      {
        path: '/cart',
        element: <CardCartList />
      },
    ]
  }
])
