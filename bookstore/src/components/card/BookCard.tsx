import { useState, useEffect } from 'react';
import { Book } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setAddFavorites, setDeleteFavorites, setBook } from '../../redux/books-slice';
import { StarRating } from '../StarRating';

export function BookCard(props: Book) {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);
  const [cart, setCart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const booksInCart = useAppSelector(state => state.books.bookCart);
  const booksFavorite = useAppSelector(state => state.books.bookFavorites);
  // console.log(bookFavorites)
  // console.log(bookById);

  useEffect(() => {
    if (booksInCart.length != 0) {
      booksInCart.forEach((item, index) => {
        if (item.isbn13 == props.isbn13) {
          setCart(!cart);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (booksFavorite.length != 0) {
      booksFavorite.forEach((item, index) => {
        if (item.isbn13 == props.isbn13) {
          setActive(!active);
        }
      });
    }
  }, []);

  function handleClickFavorite() {
    if (active) {
      dispatch(setDeleteFavorites(props.isbn13));
      setActive(false);
    } else {
      dispatch(setAddFavorites(props.isbn13));
      setActive(true);
    }
  }

  function handleClickAddCart() {
    dispatch(setBook(props.isbn13));
    setCart(true);
  }

  function handleClickDropDown() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="wrapper-book">
        <div className="wrapper-image d-flex justify-content-center align-items-center ">
          <div style={{ width: '300px', height: '300px' }}>
            <img src={props.image} alt="Book" />
          </div>
          <button className="btn btn-dark btn-lg rounded-end-0" onClick={handleClickFavorite}>
            <i className={active ? 'bi bi-heart-fill' : 'bi bi-heart'} />
          </button>
        </div>
        <div className="wrapper-content">
          <div className="d-flex justify-content-between w-100 mt-4">
            <h1>{props.price}</h1>
            <h3 className="my-auto">
              <StarRating rating={props.rating} />
            </h3>
          </div>
          <div className="w-100 mt-2" style={{ minHeight: '290px' }}>
            <ul className="nav w-100 ">
              <li className="nav-item">
                <span>Authors</span>
                <span>{props.authors}</span>
              </li>
              <li className="nav-item">
                <span>Publisher</span>
                <span>{props.publisher}</span>
              </li>
              <li>
                <button className="btn btn-light dropdown-toggle" onClick={handleClickDropDown}>
                  More details
                </button>
              </li>
              <ul className={`nav nav-dropdown w-100 ${isOpen ? 'active' : ''}`}>
                <li className="nav-item">
                  <span>Published</span>
                  <span>{props.year}</span>
                </li>
                <li className="nav-item">
                  <span>Pages</span>
                  <span>{props.pages}</span>
                </li>
                <li className="nav-item">
                  <span>Language</span>
                  <span>{props.language}</span>
                </li>
                <li className="nav-item">
                  <span>Format</span>
                  <span>Paper book / ebook (PDF)</span>
                </li>
              </ul>
            </ul>
            {/* <div>
              <p className="fw-normal">Authors</p>
              <p className="fw-normal">Publisher</p>
              <p className="fw-normal">Published</p>
              <p className="fw-normal">Pages</p>
              <p className="fw-normal">Language</p>
              <p className="fw-normal">Format</p>
            </div>
            <div>
              <p className="text-end fw-semibold">{props.authors}</p>
              <p className="text-end fw-semibold">{props.publisher}</p>

              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul className="dropdown-menu">
                <p className="text-end fw-semibold">{props.year}</p>
                <p className="text-end fw-semibold">{props.pages}</p>
                <p className="text-end fw-semibold">{props.language}</p>
                <p className="text-end fw-semibold">Paper book / ebook (PDF)</p>
              </ul>
            </div> */}
          </div>
          {/* <div> */}
          <button className="btn btn-dark btn-lg w-100 mt-4 text-uppercase fw-bold" {...{ disabled: cart }} onClick={handleClickAddCart}>
            {cart ? 'In cart' : 'Add to cart'}
          </button>
          {/* <button className="btn btn-dark-outline w-50 mx-auto">Preview book</button> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
