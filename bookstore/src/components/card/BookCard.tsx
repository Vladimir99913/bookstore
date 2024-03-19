import { useState, useEffect } from 'react';
import { Book } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setAddFavorites, setDeleteFavorites, setBook } from '../../redux/books-slice';
import { StarRating } from '../StarRating';

export function BookCard(props: Book) {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);
  const [cart, setCart] = useState(false);
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
          <div className="d-flex justify-content-between w-100 mt-3">
            <h1>{props.price}</h1>
            <h3 className="my-auto">
              <StarRating rating={props.rating} />
            </h3>
          </div>
          <div className="d-flex justify-content-between w-100 mt-2">
            <div>
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
              <p className="text-end fw-semibold">{props.year}</p>
              <p className="text-end fw-semibold">{props.pages}</p>
              <p className="text-end fw-semibold">{props.language}</p>
              <p className="text-end fw-semibold">Paper book / ebook (PDF)</p>
            </div>
          </div>
          {/* <div> */}
          <button className="btn btn-dark btn-lg w-100 mt-5 text-uppercase fw-bold" {...{ disabled: cart }} onClick={handleClickAddCart}>
            {cart ? 'In cart' : 'Add to cart'}
          </button>
          {/* <button className="btn btn-dark-outline w-50 mx-auto">Preview book</button> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
