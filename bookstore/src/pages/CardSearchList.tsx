import {useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { Card } from '../components/card/Card'
import { fetchSearchCards } from '../redux/cards-slice'
import {useParams} from 'react-router-dom'

export function CardSearchList() {
  const dispatch = useAppDispatch()
  const { query } = useParams()
  const data = useAppSelector(state => state.cards.cardSearch)
console.log(data)

  useEffect(() => {
    dispatch(fetchSearchCards({ search: query }))
  }, [dispatch, query])


  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 w-75">
          {data.map((post, index) => <Card key={index} {...post} />)}
        </div>
    </>
  )
}
