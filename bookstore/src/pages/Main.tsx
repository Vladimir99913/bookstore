import {useEffect} from 'react'
// import {useDispatch, useSelector} from 'react-redux'
import { Card } from '../components/card/Card'
import { fetchNewCards } from '../redux/cards-slice'
// import { ICardNew } from '../types/types'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { Title } from '../components/Title'

// interface MainProps {
//   books : ICardNew[]
// }

export function Main() {
  const dispatch = useAppDispatch()
  const cards = useAppSelector(state => state.cards.newCards)

  useEffect(()=>{
    dispatch(fetchNewCards())
  }, [])


return (
  <>
  <Title title="New reliase books"/>
  <div className="row row-cols-1 row-cols-md-3 g-4">
            {cards.map((card, index) => <Card key={index} {...card} />)}
          </div>
          </>
)

}
