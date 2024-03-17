import { useAppDispatch } from '../../hooks/hooks';
import { useState } from 'react';
import { Book } from '../../types/types';
import { Counter } from '../Counter';
import { setInkrement, setDecrement } from '../../redux/books-slice';

export function BookCardCart(props: Book) {
  const dispatch = useAppDispatch();
  const [counter, setCount] = useState(props.count);

  function handleClickIncrement() {
    setCount(counter + 1);
    dispatch(setInkrement(props.isbn13));
  }

  function handleClickDecrement() {
    if (counter == 1) return;
    dispatch(setDecrement(props.isbn13));
    setCount(counter - 1);
  }

  return (
    <div className="card mb-5 w-100 border border-0 border-bottom">
      <div className="row g-0 mb-3">
        <div className="col-md-2" style={{ backgroundColor: '#FEE9E2' }}>
          <img src={props.image} className="img-fluid" alt="Astronauts" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="col-md-10 d-flex justify-content-between">
          <div className="card-body d-flex flex-column justify-content-evenly">
            <h1 className="text-secondary">{props.title}</h1>
            <h3 className="card-title">{props.authors}</h3>
            <div className="d-flex justify-content-evenly w-25">
              <Counter count={counter} handleClickIncrement={handleClickIncrement} handleClickDecrement={handleClickDecrement} />
            </div>
          </div>
          <div className="my-auto">
            <h2 className="text-secondary">{props.price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
