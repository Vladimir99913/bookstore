import { BookNew } from '../../types/types';
import { NavLink } from 'react-router-dom';
import { StarRating } from '../StarRating';

export function BookCardMain(props: BookNew) {
  return (
    <div className="col" style={{ marginBottom: '60px', minWidth: '480px' }}>
      <div className="card" style={{ minHeight: '500px' }}>
        <NavLink to={`/posts/${props.isbn13}`}>
          <div style={{ width: '100%', height: '250px', marginBottom: '20px' }}>
            <img src={props.image} className="card-img-top" alt="Astronauts" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </NavLink>
        <div className="card-body" style={{ maxHeight: '250px' }}>
          <h5 className="card-title" style={{ height: '55px', overflow: 'hidden' }}>
            {props.title}
          </h5>
          <p className="card-text" style={{ height: '50px', overflow: 'hidden' }}>
            {props.subtitle}
          </p>
          <div className="d-flex justify-content-between" style={{ minHeight: '50px' }}>
            <h2 className="card-title">{props.price}</h2>
            <StarRating rating={'4'} />
          </div>
        </div>
      </div>
    </div>
  );
}
