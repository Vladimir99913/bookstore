import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/hooks';

export function Navbar() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const booksCart = useAppSelector(state => state.cards.cardCart)
  const booksFavorites = useAppSelector(state => state.cards.cardFavorites)

  function countBooksCart () {
    let countSum: number = 0
    booksCart.forEach(item => {
      countSum += item.count
    })
    return countSum
  }

  function handleChangeSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  function handleSubmit(event: React.MouseEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(`/posts/search/${search}/1`)
  }

  return (
    <nav className="navbar bg-body-tertiary" style={{marginBottom: '70px'}}>
      <div className="container-fluid">
      <NavLink to="/" className="navbar-brand mb-0 h1" >Vladzimir bookstore</NavLink>
        <form className="d-flex w-50" role="search" onSubmit={handleSubmit}>
          <input className="form-control me-2" type="search" placeholder="Search" value={search} onChange={handleChangeSearch}/>
          <button className="btn btn-outline-success" type="submit"><i className="bi bi-search"></i></button>
        </form>
        <div>
        <NavLink to="/favorites"><button className="btn btn-outline-success" ><i className="bi bi-heart me-2"></i>{booksFavorites.length}</button></NavLink>
        <NavLink to="/cart"><button className="btn btn-outline-success mx-3" ><i className="bi bi-bag  me-2"></i>{countBooksCart()}</button></NavLink>
        <button className="btn btn-outline-success" ><i className="bi bi-person"></i></button>
        </div>
      </div>
    </nav>
  )
}
