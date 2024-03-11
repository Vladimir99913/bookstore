import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { Title } from '../components/Title'
import { fetchCards } from '../redux/cards-slice'
import { CardMain } from '../components/card/CardMain'
import { Tabs } from '../components/Tabs'

export function CardPost() {
  const activeTab = useAppSelector(state => state.tabs.value)

  const { isbn13 } = useParams()
  const dispatch = useAppDispatch()
  const postById = useAppSelector(state => state.cards.card)

  useEffect(() => {
    dispatch(fetchCards(isbn13))
  }, [isbn13])

  function renderContent() {
    // if (error) {
    //   return <div className="text-danger">Error: {error}</div>
    // }

    // if (isLoading) {
    //   return <div>Loading...</div>
    // }
    return (
      <>
        <Title title={postById.title} />
        <CardMain {...postById} />
        <Tabs />
      </>
    )
  }

  return (
    renderContent()
  )

}
