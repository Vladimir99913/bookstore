import {useEffect} from 'react'
// import {useDispatch, useSelector} from 'react-redux'
import { BookCardMain } from '../components/card/BookCardMain'
import { fetchNewCards } from '../redux/books-slice'
// import { ICardNew } from '../types/types'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { Title } from '../components/Title'

// interface MainProps {
//   books : ICardNew[]
// }

export function Main() {
  const dispatch = useAppDispatch()
  const cards = useAppSelector(state => state.books.newBooks)

  useEffect(()=>{
    dispatch(fetchNewCards())
  }, [])


return (
  <>
  <Title title="New reliase books"/>
  <div className="row row-cols-1 row-cols-md-3 g-4">
            {cards.map((card, index) => <BookCardMain key={index} {...card} />)}
          </div>
          </>
)

}
