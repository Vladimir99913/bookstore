import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/hooks';

export function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const booksCart = useAppSelector(state => state.books.bookCart);
  const booksFavorites = useAppSelector(state => state.books.bookFavorites);

  function countBooksCart() {
    let countSum: number = 0;
    booksCart.forEach(item => {
      countSum += item.count;
    });
    return countSum;
  }

  let countInCart = countBooksCart();

  function handleChangeSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function handleSubmit(event: React.MouseEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(`/posts/search/${search}/1`);
  }

  return (
    <nav className="navbar bg-body-tertiary" style={{ marginBottom: '70px' }}>
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand mb-0 h1">
          Vladzimir bookstore
        </NavLink>
        <form className="d-flex w-50" role="search" onSubmit={handleSubmit}>
          <input className="form-control me-2" type="search" placeholder="Search" value={search} onChange={handleChangeSearch} />
          <button className="btn btn-outline-success" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
        <div>
          <NavLink to="/favorites">
            <button className="btn btn-outline-success" style={{ minWidth: '65px' }}>
              <i className="bi bi-heart mx-auto p-2"></i>
              <span className="fs-6 fw-semibold">{booksFavorites.length ? booksFavorites.length : ''}</span>
            </button>
          </NavLink>
          <NavLink to="/cart">
            <button className="btn btn-outline-success mx-3" style={{ minWidth: '65px' }}>
              <i className="bi bi-bag mx-auto p-2"></i>
              <span className="fs-6 fw-semibold"> {countInCart ? countInCart : ''} </span>
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
