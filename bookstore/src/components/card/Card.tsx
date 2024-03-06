import Astr from '../../assets/Astronauts3.svg'

export function Card() {
  return (
    <div className="card" style={{width: '350px', maxHeight: '450px'}} >
      <div style={{ width: '100%', height: '400px' }}>
          <img src={Astr} className="card-img-top" alt="Astronauts" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
        <div className="card-body">
          <h2 className="card-title">Card title</h2>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className="d-flex justify-content-between ">
          <h2 className="card-title">34.5$</h2>
          <p className="card-text">Some quick example text </p>
  </div>
    </div>
  )
}
