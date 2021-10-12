import {Film} from '../../types/film';
import Logo from '../logo/logo';
import {ChangeEvent, useState} from 'react';

type AddReviewProps = {
  film: Film;
}

function AddReviewScreen(props: AddReviewProps): JSX.Element {
  const {film} = props;
  const {title, image, poster} = film;
  const [review, setReview] = useState('');
  const [rating, setRating] = useState<number>();
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

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="/">Sign out</a>
            </li>
          </ul>
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
                onInput={() => setRating(10)}
              />
              <label className="rating__label" htmlFor="star-10">Rating 10</label>

              <input className="rating__input" id="star-9" type="radio" name="rating" value="9"
                onInput={() => setRating(9)}
              />
              <label className="rating__label" htmlFor="star-9">Rating 9</label>

              <input className="rating__input" id="star-8" type="radio" name="rating" value="8"
                onInput={() => setRating(8)}
              />
              <label className="rating__label" htmlFor="star-8">Rating 8</label>

              <input className="rating__input" id="star-7" type="radio" name="rating" value="7"
                onInput={() => setRating(7)}
              />
              <label className="rating__label" htmlFor="star-7">Rating 7</label>

              <input className="rating__input" id="star-6" type="radio" name="rating" value="6"
                onInput={() => setRating(6)}
              />
              <label className="rating__label" htmlFor="star-6">Rating 6</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5"
                onInput={() => setRating(5)}
              />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4"
                onInput={() => setRating(4)}
              />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3"
                onInput={() => setRating(3)}
              />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2"
                onInput={() => setRating(2)}
              />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-1" type="radio" name="rating" value="1"
                onInput={() => setRating(1)}
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

