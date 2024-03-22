import { Book } from '../../types/types';
import { StarRating } from '../StarRating';

interface BookCardProps {
  book: Book;
  handleClickFavorite: () => void;
  handleClickAddCart: () => void;
  handleClickDropDown: () => void;
  handleClickImage: () => void;
  active: boolean;
  cart: boolean;
  isOpen: boolean;
}

export function BookCard(props: BookCardProps) {
  return (
    <>
      <div className="wrapper-book">
        <div className="wrapper-image d-flex justify-content-center align-items-center ">
          <div style={{ width: '300px', height: '300px' }} onClick={props.handleClickImage}>
            <img src={props.book.image} alt="Book" />
          </div>
          <button className="btn btn-dark btn-lg rounded-end-0" onClick={props.handleClickFavorite}>
            <i className={props.active ? 'bi bi-heart-fill' : 'bi bi-heart'} />
          </button>
        </div>
        <div className="wrapper-content">
          <div className="d-flex justify-content-between w-100 mt-4">
            <h1>{props.book.price}</h1>
            <h3 className="my-auto">
              <StarRating rating={props.book.rating} />
            </h3>
          </div>
          <div className="w-100 mt-2" style={{ minHeight: '290px' }}>
            <ul className="nav w-100 ">
              <li className="nav-item">
                <span>Authors</span>
                <span>{props.book.authors}</span>
              </li>
              <li className="nav-item">
                <span>Publisher</span>
                <span>{props.book.publisher}</span>
              </li>
              <li>
                <button className="btn btn-light dropdown-toggle" onClick={props.handleClickDropDown}>
                  More details
                </button>
              </li>
              <ul className={`nav nav-dropdown w-100 ${props.isOpen ? 'active' : ''}`}>
                <li className="nav-item">
                  <span>Published</span>
                  <span>{props.book.year}</span>
                </li>
                <li className="nav-item">
                  <span>Pages</span>
                  <span>{props.book.pages}</span>
                </li>
                <li className="nav-item">
                  <span>Language</span>
                  <span>{props.book.language}</span>
                </li>
                <li className="nav-item">
                  <span>Format</span>
                  <span>Paper book / ebook (PDF)</span>
                </li>
              </ul>
            </ul>
          </div>
          <button className="btn btn-dark btn-lg w-100 mt-4 text-uppercase fw-bold" {...{ disabled: props.cart }} onClick={props.handleClickAddCart}>
            {props.cart ? 'In cart' : 'Add to cart'}
          </button>
        </div>
      </div>
    </>
  );
}
