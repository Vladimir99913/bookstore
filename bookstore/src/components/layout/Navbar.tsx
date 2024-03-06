export function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Vladzimir bookstore</a>
        <form className="d-flex w-50" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
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
