import { useAppSelector, useAppDispatch } from "../hooks/hooks"
import { CardFavorite } from "../components/card/CardFavorite"

export function CardFavoritesList() {
const booksFavorites = useAppSelector(state=>state.cards.cardFavorites)

  return (
    <>
        {booksFavorites.map((post, index) => <CardFavorite key={index} {...post} />)}
    </>
  )
}
