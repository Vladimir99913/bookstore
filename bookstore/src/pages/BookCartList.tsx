import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { useState } from 'react';
import { BookCardCart } from '../components/card/BookCardCart';
import { setDeleteAllBookCart } from '../redux/books-slice';
import { ModalConfirm } from '../components/ModalConfirm';
import { hideModal, showModal } from '../redux/modal-slice';

export function BookCartList() {
  const dispatch = useAppDispatch();
  const shownModal = useAppSelector(state => state.modal.shownModal);
  const isLoading = useAppSelector(state => state.books.isLoading);
  const error = useAppSelector(state => state.books.error);
  const booksCart = useAppSelector(state => state.books.bookCart);

  function sumBooks() {
    let sum: number = 0;
    booksCart.forEach(item => {
      sum += Number(item.price.slice(1)) * item.count;
    });
    sum = Math.round(sum * 100) / 100;
    return sum;
  }

  function sumBooksVat() {
    let sum: number = sumBooks();
    sum = sum * 0.1;
    sum = Math.round(sum * 100) / 100;
    return sum;
  }

  function sumBooksTotal() {
    let sumTotal: number = sumBooks() + sumBooksVat();
    return sumTotal.toFixed(2);
  }

  function handleClickDelteAll() {
    dispatch(setDeleteAllBookCart());
  }

  function onHidden() {
    dispatch(hideModal());
  }

  function handleClickCheck() {
    dispatch(showModal());
  }

  function renderContent() {
    if (error) {
      return <h1 className="text-danger">Error: {error}</h1>;
    }
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    if (booksCart.length == 0) {
      return <h1>Your cart is empty</h1>;
    }
    return (
      <>
        {booksCart.map((post, index) => (
          <BookCardCart key={index} {...post} />
        ))}
        <div className="wrapper-delete-all align-self-start">
          <button className="btn btn-danger btn-lg w-100" onClick={handleClickDelteAll}>
            Delete all
          </button>
        </div>
        <div className="wrapper-total align-self-end">
          <div className="d-flex justify-content-between">
            <div>
              <p className="fs-5 fw-normal">Sum total:</p>
              <p className="fs-5 fw-normal">VAT:</p>
              <h1>Total:</h1>
            </div>
            <div>
              <p className="text-end fs-5 fw-normal">
                <span>&#36;</span>
                {sumBooks()}
              </p>
              <p className="text-end fs-5 fw-normal">
                <span>&#36;</span>
                {sumBooksVat()}
              </p>
              <h1 className="text-end ">
                <span>&#36;</span>
                {sumBooksTotal()}
              </h1>
            </div>
          </div>
          <button className="btn btn-dark btn-lg w-100" onClick={handleClickCheck}>
            Check out
          </button>
        </div>
        <ModalConfirm shown={shownModal} onHidden={onHidden} handleClickDelteAll={handleClickDelteAll}></ModalConfirm>
      </>
    );
  }

  return <>{renderContent()}</>;
}
