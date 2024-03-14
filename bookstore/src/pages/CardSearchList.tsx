import {useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { Card } from '../components/card/Card'
import { fetchSearchCards } from '../redux/cards-slice'
import {useParams} from 'react-router-dom'
import { Pagination } from '../components/Pagination'

export function CardSearchList() {
  const dispatch = useAppDispatch()
  const { query } = useParams()
  const { pageNumber: pageNumberCurrent } = useParams()
  const pagesCounter = useAppSelector(state => state.cards.pagesCounter)
  const data = useAppSelector(state => state.cards.cardSearch)

  useEffect(() => {
    dispatch(fetchSearchCards({ search: query, pageNumber: pageNumberCurrent }))
  }, [dispatch, query, pageNumberCurrent])


  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((post, index) => <Card key={index} {...post} />)}
        </div>
        <nav>
            <ul className="pagination mt-3">
              <Pagination pageNumberCurrent={pageNumberCurrent} pagesCounter={pagesCounter} url={`/posts/search/${query}/`} />
            </ul>
          </nav>
    </>
  )
}
