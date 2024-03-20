import { useEffect } from 'react';
// import {useDispatch, useSelector} from 'react-redux'
import { BookCardMain } from '../components/card/BookCardMain';
import { fetchNewCards } from '../redux/books-slice';
// import { ICardNew } from '../types/types'
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { Title } from '../components/Title';

// interface MainProps {
//   books : ICardNew[]
// }

export function Main() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.books.isLoading);
  const error = useAppSelector(state => state.books.error);
  const cards = useAppSelector(state => state.books.newBooks);

  useEffect(() => {
    dispatch(fetchNewCards());
  }, []);

  // const colors: string[] = ['#D7E4FD', '#CAEFF0', '#F4EEFD', '#FEE9E2'];

  // let current = colors[Math.floor(Math.random() * colors.length)];
  // console.log(current);

  // function randomInteger(min: number, max: number) {
  //   let rand = min + Math.random() * (max + 1 - min);
  //   return Math.floor(rand);
  // }

  // const randomColor = colors[randomInteger(0, colors.length - 1)];
  // console.log(randomColor);

  function renderContent() {
    if (error) {
      return <h1 className="text-danger">Error: {error}</h1>;
    }
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    return (
      <>
        <Title title="New reliase books" />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cards.map((card, index) => (
            <BookCardMain key={index} {...card} />
          ))}
        </div>
      </>
    );
  }

  return <>{renderContent()}</>;
}
