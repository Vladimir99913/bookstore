import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Navbar() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

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
        <a className="navbar-brand">Vladzimir bookstore</a>
        <form className="d-flex w-50" role="search" onSubmit={handleSubmit}>
          <input className="form-control me-2" type="search" placeholder="Search" value={search} onChange={handleChangeSearch}/>
          <button className="btn btn-outline-success" type="submit"><i className="bi bi-search"></i></button>
        </form>
        <div>
        <button className="btn btn-outline-success" ><i className="bi bi-heart"></i></button>
        <button className="btn btn-outline-success mx-3" ><i className="bi bi-bag"></i></button>
        <button className="btn btn-outline-success" ><i className="bi bi-person"></i></button>
        </div>
      </div>
    </nav>
  )
}
