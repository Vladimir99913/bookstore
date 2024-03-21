import { useAppDispatch } from '../../hooks/hooks';
import { Book } from '../../types/types';
import { setDeleteFavorites } from '../../redux/books-slice';
import { StarRating } from '../StarRating';
import { NavLink } from 'react-router-dom';

export function BookCardFavorite(props: Book) {
  const dispatch = useAppDispatch();

  function handleClickDelteFavorite() {
    dispatch(setDeleteFavorites(props.isbn13));
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
            <div className="d-flex justify-content-between w-100">
              <h2 className="text-secondary">{props.price}</h2>
              <h3 className="m-auto">
                <StarRating rating={props.rating} />
              </h3>
            </div>
          </div>
          <div className="my-auto">
            <button className="btn-favorite btn btn-dark btn-lg" onClick={handleClickDelteFavorite}>
              <i className="bi bi-heart-fill" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
