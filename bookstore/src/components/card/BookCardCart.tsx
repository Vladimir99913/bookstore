import { useAppDispatch } from '../../hooks/hooks';
import { useState } from 'react';
import { Book } from '../../types/types';
import { Counter } from '../Counter';
import { setInkrement, setDecrement, setDeleteBookCart } from '../../redux/books-slice';
import { NavLink } from 'react-router-dom';

export function BookCardCart(props: Book) {
  const dispatch = useAppDispatch();
  const [counter, setCount] = useState(props.count as number);

  function handleClickIncrement() {
    setCount(counter + 1);
    dispatch(setInkrement(props.isbn13));
  }

  function handleClickDecrement() {
    if (counter == 1) return;
    dispatch(setDecrement(props.isbn13));
    setCount(counter - 1);
  }

  function handleClickDeleteBook() {
    dispatch(setDeleteBookCart(props.isbn13));
  }

  return (
    <div className="card mb-5 w-100 border border-0 border-bottom">
      <div className="row g-0 mb-3">
        <div className="col-md-2" style={{ backgroundColor: '#FEE9E2' }}>
          <NavLink to={`/books/${props.isbn13}`}>
            <img src={props.image} className="img-fluid" alt="Astronauts" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </NavLink>
        </div>
        <div className="col-md-10 d-flex justify-content-between">
          <div className="card-body d-flex flex-column justify-content-evenly">
            <h1 className="text-secondary">{props.title}</h1>
            <h3 className="card-title">{props.authors}</h3>
            <div className="counter d-flex justify-content-evenly">
              <Counter count={counter} handleClickIncrement={handleClickIncrement} handleClickDecrement={handleClickDecrement} />
            </div>
          </div>
          <div className="my-auto w-25">
            <h2 className="text-secondary">{props.price}</h2>
          </div>
          <div className="my-auto">
            <button className="btn btn-lg" onClick={handleClickDeleteBook}>
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
