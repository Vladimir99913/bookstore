import { ICard } from "../../types/types"
import { useAppSelector } from "../../hooks/hooks"
import { Tabs } from "./Tabs"

export function CardMain(props:ICard) {
  const activeTab = useAppSelector(state => state.tabs.value)

  return (
    <>
    <div className="d-flex justify-content-between w-100">
      <div className="d-flex justify-content-center align-items-center" style={{ width: '45%', height: '450px', backgroundColor:'#FEE9E2' }}>
      <div style={{ width: '300px', height: '300px' }}>
          <img src={props.image} alt="Astronauts" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      </div>
      <div style={{ width: '45%', height: '450px' }}>
        <h1 className="my-5">{props.price}</h1>
        <div className="d-flex justify-content-between w-100">
        <div>
        <p>Authors</p>
        <p>Publisher</p>
        <p>Language</p>
        <p>Format</p>
        </div>
        <div>
        <p>{props.authors}</p>
        <p>{props.publisher}</p>
        <p>{props.language}</p>
        <p>Paper book / ebook (PDF)</p>
        </div>
        </div>
        <button className="btn btn-dark w-100 my-4">Add to cart</button>
        <button className="btn btn-dark w-50">Preview book</button>
      </div>
    </div>
    </>
  )
}
