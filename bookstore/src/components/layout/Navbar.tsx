import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/hooks';

export function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

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

  function handleClickButton() {
    setIsOpen(!isOpen);
  }

  function handleClickClose() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar bg-body-tertiary" style={{ marginBottom: '70px' }}>
      <div className="d-flex justify-content-between w-100">
        <NavLink to="/" className="navbar-brand ms-2 mb-0 h1">
          Vladzimir bookstore
        </NavLink>
        <button className="navbar-toggler me-2" onClick={handleClickButton}>
          <i className="bi bi-list"></i>
        </button>
        <div className={`header ${isOpen ? 'active' : ''}`} onClick={event => event.stopPropagation()}>
          {isOpen && (
            <div className="d-flex justify-content-between p-2 ">
              <h4 className="my-auto">Vladzimir bookstore</h4>
              <button className="btn btn-lg my-auto" onClick={handleClickClose}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
          )}
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder="Search" value={search} onChange={handleChangeSearch} />
            <button className="btn btn-outline-success" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
          <ul className="header__ul nav">
            <li className="header__ul__li">
              <NavLink to="/favorites">
                <button className="btn btn-outline-success" style={{ minWidth: '70px' }}>
                  {isOpen ? <span className="p-2">Favorites</span> : <i className="bi bi-heart mx-auto p-2"></i>}
                  <span className="fs-6 fw-semibold">{booksFavorites.length ? booksFavorites.length : ''}</span>
                </button>
              </NavLink>
            </li>
            <li className="header__ul__li">
              <NavLink to="/cart">
                <button className="btn btn-outline-success mx-3" style={{ minWidth: '70px' }}>
                  {isOpen ? <span className="p-2">Cart</span> : <i className="bi bi-bag mx-auto p-2"></i>}
                  <span className="fs-6 fw-semibold"> {countInCart ? countInCart : ''} </span>
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={`background ${isOpen ? 'active' : ''}`} onClick={handleClickClose}></div>
    </nav>
  );
}
