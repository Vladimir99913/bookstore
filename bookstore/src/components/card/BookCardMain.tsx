// import Astr from '../../assets/Astronauts3.svg'
import { BookNew } from '../../types/types'
import { NavLink } from 'react-router-dom'
// interface CardProps {
//   books: ICardNew[]
// }
export function BookCardMain(props:BookNew) {
  return (
    <div className="col" style={{marginBottom: '60px'}}>
    <div className="card" style={{ minHeight: '500px'}} >
      <div style={{ width: '100%', height: '250px', marginBottom: '20px'}} >
          <img src={props.image} className="card-img-top" alt="Astronauts" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
        <div className="card-body" style={{ maxHeight: '250px'}}>
          <h5 className="card-title" style={{ minHeight: '55px'}}>{props.title}</h5>
          <p className="card-text" style={{ minHeight: '55px'}}>{props.subtitle}</p>
          <div className="d-flex justify-content-between" style={{ minHeight: '50px'}}>
          <h2 className="card-title">{props.price}</h2>
          <p className="card-text">{}</p>
          </div>
          <NavLink to={`/posts/${props.isbn13}`}><button className="btn btn-primary w-100">Open</button></NavLink>
        </div>
    </div>
    </div>
  )
}
