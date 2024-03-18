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
  const bookById = useAppSelector(state => state.books.book);
  // console.log(bookFavorites)
  // console.log(bookById);
  useEffect(() => {
    // if (booksInCart.length !== 0 && booksInCart.findIndex(item => item.title == props.title)) {
    //   console.log(booksInCart.findIndex(item => item.title == props.title));
    //   setCart(true);
    // }
    if (booksInCart.length != 0) {
      booksInCart.forEach(item => {
        if (item.isbn13 == props.isbn13) {
          console.log('yes');
          setCart(true);
        }
      });
    }
    // if (!booksInCart.findIndex(item => item.isbn13 == props.isbn13)) {
    //   console.log(booksInCart.findIndex(item => item.isbn13 == props.isbn13));
    //   setCart(true);
    // }
  }, [booksInCart]);
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
      <div className="d-flex justify-content-between w-100">
        <div className="d-flex justify-content-center align-items-center " style={{ width: '45%', height: '450px', backgroundColor: '#FEE9E2', position: 'relative' }}>
          <div style={{ width: '300px', height: '300px' }}>
            <img src={props.image} alt="Astronauts" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <button className="btn btn-dark btn-lg rounded-end-0" onClick={handleClickFavorite} style={{ position: 'absolute', top: '0', right: '0' }}>
            <i className={active ? 'bi bi-heart-fill' : 'bi bi-heart'} />
          </button>
        </div>
        <div style={{ width: '45%', height: '450px' }}>
          <div className="d-flex justify-content-between w-100 mt-3">
            <h1>{props.price}</h1>
            <StarRating rating={props.rating} />
          </div>
          <div className="d-flex justify-content-between w-100 mt-2">
            <div>
              <p className="fs-5 fw-normal">Authors</p>
              <p className="fs-5 fw-normal">Publisher</p>
              <p className="fs-5 fw-normal">Published</p>
              <p className="fs-5 fw-normal">Pages</p>
              <p className="fs-5 fw-normal">Language</p>
              <p className="fs-5 fw-normal">Format</p>
            </div>
            <div>
              <p className="text-end fs-5 fw-semibold">{props.authors}</p>
              <p className="text-end fs-5 fw-semibold">{props.publisher}</p>
              <p className="text-end fs-5 fw-semibold">{props.year}</p>
              <p className="text-end fs-5 fw-semibold">{props.pages}</p>
              <p className="text-end fs-5 fw-semibold">{props.language}</p>
              <p className="text-end fs-5 fw-semibold">Paper book / ebook (PDF)</p>
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
