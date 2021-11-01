import Logo from '../logo/logo';
import {ChangeEvent, useState} from 'react';
import {useSelector} from 'react-redux';
import {State} from '../../types/state';
import { AuthorizationStatus } from '../../const';
import UserBlockLoggedIn from '../user-block/user-block-logged-in';
import UserBlockLoggedOut from '../user-block/user-block-logged-out';

function AddReviewScreen(): JSX.Element {
  const films = useSelector((state: State) => state.films);
  const auth = useSelector((state: State) => state.authorizationStatus);
  const [firstFilm] = films;
  const {title, image, poster} = firstFilm;
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const isFormInvalid = Boolean(rating === undefined || review.length < 50);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={image} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Logo />
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="/">Add review</a>
              </li>
            </ul>
          </nav>

          {auth === AuthorizationStatus.Auth ? <UserBlockLoggedIn /> : <UserBlockLoggedOut />}
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={poster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-10" type="radio" name="rating" value="10"
                onChange={(event: ChangeEvent<HTMLInputElement>) => setRating(event.target.value)}
              />
              <label className="rating__label" htmlFor="star-10">Rating 10</label>

              <input className="rating__input" id="star-9" type="radio" name="rating" value="9"
                onChange={(event: ChangeEvent<HTMLInputElement>) => setRating(event.target.value)}
              />
              <label className="rating__label" htmlFor="star-9">Rating 9</label>

              <input className="rating__input" id="star-8" type="radio" name="rating" value="8"
                onChange={(event: ChangeEvent<HTMLInputElement>) => setRating(event.target.value)}
              />
              <label className="rating__label" htmlFor="star-8">Rating 8</label>

              <input className="rating__input" id="star-7" type="radio" name="rating" value="7"
                onChange={(event: ChangeEvent<HTMLInputElement>) => setRating(event.target.value)}
              />
              <label className="rating__label" htmlFor="star-7">Rating 7</label>

              <input className="rating__input" id="star-6" type="radio" name="rating" value="6"
                onChange={(event: ChangeEvent<HTMLInputElement>) => setRating(event.target.value)}
              />
              <label className="rating__label" htmlFor="star-6">Rating 6</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5"
                onChange={(event: ChangeEvent<HTMLInputElement>) => setRating(event.target.value)}
              />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4"
                onChange={(event: ChangeEvent<HTMLInputElement>) => setRating(event.target.value)}
              />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3"
                onChange={(event: ChangeEvent<HTMLInputElement>) => setRating(event.target.value)}
              />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2"
                onChange={(event: ChangeEvent<HTMLInputElement>) => setRating(event.target.value)}
              />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-1" type="radio" name="rating" value="1"
                onChange={(event: ChangeEvent<HTMLInputElement>) => setRating(event.target.value)}
              />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
              value={review}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setReview(event.target.value)}
            >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={isFormInvalid}>Post</button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
}

export default AddReviewScreen;

