import {Review} from '../../types/reviews';
import {formatDate} from '../../utils/common';

type ReviewProps = {
  review: Review,
}

function ReviewItem(props: ReviewProps): JSX.Element {
  const {comment, date, user, rating} = props.review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time
            className="review__date"
            dateTime={formatDate(date, 'YYYY-MM-DD')}
          >
            {formatDate(date, 'MMMM DD, YYYY')}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default ReviewItem;
