import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { Title } from '../components/Title'
import { fetchCards } from '../redux/cards-slice'
import { CardMain } from '../components/card/CardMain'
import { Tabs } from '../components/Tabs'
import { Subscribe } from '../components/Subscribe'

export function CardPost() {
  const activeTab = useAppSelector(state => state.tabs.value)

  const { isbn13 } = useParams()
  const dispatch = useAppDispatch()
  const postById = useAppSelector(state => state.cards.card)

  useEffect(() => {
    dispatch(fetchCards(isbn13))
  }, [isbn13])

  function renderContent() {
    switch (activeTab) {
      case 'tab1':
        // if (error) {
        //   return <div className="text-danger">Error: {error}</div>
        // }
        // if (isLoading) {
        //   return <div>Loading...</div>
        // }
        return <>
          <div className="row row-cols-1 row-cols-md-3 w-75 mb-4" style={{minHeight:'250px'}}>
            {postById.desc}
          </div>
          {/* <nav>
            <ul className="pagination mt-3">
              <Pagination pageNumberCurrent={pageNumberCurrent} pagesCounter={pagesCounter} url={'/posts/page/'} />
            </ul>
          </nav> */}
        </>
      case 'tab2':
        return <div className="row row-cols-1 row-cols-md-3 w-75" style={{minHeight:'250px'}}>
           {postById.authors}
        </div>
      case 'tab3':
        return <div className="row row-cols-1 row-cols-md-3 w-75" style={{minHeight:'250px'}}>
           {postById.publisher}
        </div>
      default:
        return null
    }
  }

  return (
    <>    <Title title={postById.title} />
        <CardMain {...postById} />
        <Tabs />
    {renderContent()}
    <Subscribe />
    </>
  )

}
