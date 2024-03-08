// import Astr from '../../assets/Astronauts3.svg'
import { ICardNew } from '../../types/types'

// interface CardProps {
//   books: ICardNew[]
// }
export function Card(props:ICardNew) {
  return (
    <div className="col">
    <div className="card" style={{}} >
      <div style={{ width: '100%', height: '400px' }}>
          <img src={props.image} className="card-img-top" alt="Astronauts" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.subtitle}</p>
        </div>
        <div className="d-flex justify-content-between ">
          <h2 className="card-title">{props.price}</h2>
          <p className="card-text">Some quick example text </p>
  </div>
    </div>
    </div>
  )
}
