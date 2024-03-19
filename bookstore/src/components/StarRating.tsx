interface StarsRatingProps {
  rating: string;
}

export function StarRating(props: StarsRatingProps) {
  let ratingStars: number = Number(props.rating);
  const totalStars: number = 5;

  const stars = Array(totalStars).fill(0);
  return (
    <>
      {stars.map((item, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input type="radio" name="rating" value={currentRating} style={{ display: 'none' }} />
            <i className={currentRating <= ratingStars ? 'bi bi-star-fill ms-1' : 'bi bi-star ms-1'} />
          </label>
        );
      })}
    </>
  );
}
