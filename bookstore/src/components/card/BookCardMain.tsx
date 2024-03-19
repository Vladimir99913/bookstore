import { BookNew } from '../../types/types';
import { NavLink } from 'react-router-dom';
import { StarRating } from '../StarRating';

export function BookCardMain(props: BookNew) {
  return (
    <div className="col">
      <div className="card">
        <NavLink to={`/posts/${props.isbn13}`}>
          <div style={{ width: '100%', height: '250px', marginBottom: '20px' }}>
            <img src={props.image} className="card-img-top" alt="Astronauts" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </NavLink>
        <div className="card-body">
          <h5 className="card-title" style={{ height: '55px', overflow: 'hidden' }}>
            {props.title}
          </h5>
          <p className="card-text" style={{ height: '50px', overflow: 'hidden' }}>
            {props.subtitle}
          </p>
          <div className="d-flex justify-content-between" style={{ minHeight: '50px' }}>
            <h2 className="card-title">{props.price}</h2>
            <h3 className="my-auto">
              <StarRating rating={'4'} />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
