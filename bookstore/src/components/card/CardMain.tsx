import Astr from '../../assets/Astronauts3.svg'

export function CardMain() {
  return (
    <div className="d-flex justify-content-between w-100">
      <div style={{ width: '45%', height: '450px' }}>
          <img src={Astr} alt="Astronauts" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ width: '45%', height: '450px' }}>
        <h1 className="my-5">$41.57</h1>
        <div className="d-flex justify-content-between w-100">
        <div>
        <p>Authors   </p>
        <p>Publisher</p>
        <p>Language</p>
        <p>Format</p>
        </div>
        <div>
        <p>Authors sdsadasd sdsdf  </p>
        <p>Publisher</p>
        <p>Language</p>
        <p>Format</p>
        </div>
        </div>
        <button className="btn btn-dark w-100 my-4">Add</button>
        <button className="btn btn-dark w-50">Preview</button>
      </div>
    </div>
  )
}
