import {useEffect, useState } from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {fetchComments} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/action';
import {State} from '../../types/state';
import Spinner from '../spinner/spinner';
import ReviewItem from './review-item';

type ReviewsProp = {
  filmId: string,
}

function mapStateToProps({DATA}: State) {
  return {
    comments: DATA.comments,
  };
}

function mapDispatchToProps(dispatch: ThunkAppDispatch) {
  return {
    onCommentsLoading(filmId: string) {
      dispatch(fetchComments(filmId));
    },
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReviewsProps = ConnectedProps<typeof connector> & ReviewsProp;

function Reviews(props: ReviewsProps): JSX.Element {
  const {onCommentsLoading, filmId, comments} = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    onCommentsLoading(filmId);
    setIsLoading(false);
  },[onCommentsLoading, filmId]);

  if (isLoading) {
    return (
      <div className="film-card__reviews film-card__row">
        <Spinner/>
      </div>
    );
  }

  const reviewElements = comments
    .map((comment) => <ReviewItem key={comment.date.toLocaleString()} review={comment}/>);
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

export {Reviews};
export default connector(Reviews);
