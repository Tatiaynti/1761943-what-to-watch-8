import {Fragment} from 'react';
import {Film} from '../../types/film';
import {getFilmRatingDescription} from '../../utils/common';

type FilmProps = {
  film: Film,
};

function Overview(props: FilmProps): JSX.Element {
  const {rate, description, director, starring, scoresCount} = props.film;

  return (
    <Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{rate}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getFilmRatingDescription(rate)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring">
          <strong>
            Starring: {starring?.join(', ')} and other
          </strong>
        </p>
      </div>
    </Fragment>
  );
}

export default Overview;
