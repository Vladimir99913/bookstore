import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { BookCardMain } from '../components/card/BookCardMain'
import { fetchSearchCards } from '../redux/books-slice'
import { useParams } from 'react-router-dom'
import { Pagination } from '../components/Pagination'

export function BookSearchList() {
  const dispatch = useAppDispatch()
  const { query } = useParams()
  const { pageNumberCurrent } = useParams()
  console.log(pageNumberCurrent)
  const pagesCounter = useAppSelector(state => state.books.pagesCounter)
  const data = useAppSelector(state => state.books.bookSearch)
  // type O = { search: string, pageNumber: number }
  useEffect(() => {
    if(query && pageNumberCurrent){
      dispatch(fetchSearchCards({search: query, pageNumber: pageNumberCurrent }))
    }

  }, [dispatch, query, pageNumberCurrent])


  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((post, index) => <BookCardMain key={index} {...post} />)}
        </div>
        <nav>
            <ul className="pagination pagination-lg mt-3">
            <li className="page-item ">
              <span className="page-link">Previous</span>
            </li>
              <Pagination pageNumberCurrent={pageNumberCurrent} pagesCounter={pagesCounter} url={`/posts/search/${query}/`} />
              <li className="page-item">
              <span className="page-link" >Next</span>
           </li>
            </ul>
          </nav>
    </>
  )
}
