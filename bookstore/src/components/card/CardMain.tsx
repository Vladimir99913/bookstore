import {useState} from 'react'
import { ICard } from "../../types/types"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { setAddFavorites, setDeleteFavorites, setCart } from "../../redux/cards-slice"

export function CardMain(props:ICard) {
const dispatch = useAppDispatch()
const [active, setActive] = useState(false)
// const bookFavorites = useAppSelector(state=>state.cards.cardFavorites)
// const bookById = useAppSelector(state=>state.cards.card)
// console.log(bookFavorites)
// console.log(bookById)

  function handleClickFavorite() {
    if(active) {
      dispatch(setDeleteFavorites(props.isbn13))
      setActive(false)
    }
    else {
      dispatch(setAddFavorites(props.isbn13))
      setActive(true)
    }
  }

  function handleClickAddCart() {
    dispatch(setCart(props.isbn13))
  }

  return (
    <>
    <div className="d-flex justify-content-between w-100">
      <div className="d-flex justify-content-center align-items-center" style={{ width: '45%', height: '450px', backgroundColor:'#FEE9E2', position:'relative'  }}>
      <div style={{ width: '300px', height: '300px'}}>
          <img src={props.image} alt="Astronauts" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <button className="btn btn-dark btn-lg" onClick={handleClickFavorite} style={{position:'absolute', top:'0', right:'0'}}><i className={active ? "bi bi-heart-fill" : "bi bi-heart"}/></button>
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
        <div className="d-grid gap-2">
        <button className="btn btn-dark btn-lg w-100 my-4" onClick={handleClickAddCart}>Add to cart</button>
        <button className="btn btn-dark-outline w-50 mx-auto">Preview book</button>
        </div>
      </div>
    </div>
    </>
  )
}
