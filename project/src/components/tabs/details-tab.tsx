import {Fragment, memo} from 'react';
import {Film} from '../../types/film';
import {convertMinutesToHours} from '../../utils/common';

type FilmProps = {
  film: Film,
};

function Details(props: FilmProps):JSX.Element {
  const {director, starring, runtime, genre, releaseYear} = props.film;

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {starring.map((star) => <Fragment key={star}>{star}<br /></Fragment>)}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{convertMinutesToHours(runtime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{releaseYear}</span>
        </p>
      </div>
    </div>
  );
}

export default memo(Details, (prevProps, nextProps) => prevProps.film === nextProps.film);
