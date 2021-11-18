import {useEffect, useState } from 'react';
import {fetchComments} from '../../store/api-actions';
import {Review} from '../../types/reviews';
import Spinner from '../spinner/spinner';
import ReviewItem from './review-item';

type ReviewsProps = {
  filmId: string,
}

function Reviews(props: ReviewsProps): JSX.Element {
  const {filmId} = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetchComments(filmId)
      .then((data: any) => {
        setReviews(data);
        setIsLoading(false);
      });
  }, [filmId]);

  if (isLoading) {
    return (
      <div className="film-card__reviews film-card__row">
        <Spinner/>
      </div>
    );
  }

  const reviewElements = reviews
    .map((review) => <ReviewItem key={review.date.toLocaleString()} review={review}/>);
  const countOfItemsInColumn = Math.ceil(reviewElements.length / 2);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviewElements.slice(0, countOfItemsInColumn)}
      </div>
      <div className="film-card__reviews-col">
        {reviewElements.slice(countOfItemsInColumn)}
      </div>
    </div>
  );
}

export default Reviews;
