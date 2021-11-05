import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Review} from '../../types/reviews';
import Logo from '../logo/logo';
import {generatePath, useParams} from 'react-router';
import {useSelector} from 'react-redux';
import {State} from '../../types/state';
import {UserBlock} from '../user-block/user-block';
import { getCurrentFilm } from '../../utils/common';

type MovieReviewsProps = {
  reviews: Review[];
}

function MoviePageReviewsScreen({reviews}: MovieReviewsProps): JSX.Element {
  const films = useSelector((state: State) => state.films);

  const {id} = useParams<{ id: string }>();
  const currentFilm = getCurrentFilm(films, id);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.image} alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Logo />
            </div>

            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.releaseYear}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={generatePath(AppRoute.Player, {id: currentFilm.id})} style={{textDecoration: 'none'}}>
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a className="btn film-card__button" href={generatePath(AppRoute.AddReview, {id: currentFilm.id})}>Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm.poster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item">
                    <Link className="film-nav__link" to={generatePath(AppRoute.Film, {id: currentFilm.id})}>Overview</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link className="film-nav__link" to={generatePath(AppRoute.FilmDetails, {id: currentFilm.id})}>Details</Link>
                  </li>
                  <li className="film-nav__item film-nav__item--active">
                    <Link className="film-nav__link" to={generatePath(AppRoute.FilmReviews, {id: currentFilm.id})}>Reviews</Link>
                  </li>
                </ul>
              </nav>

              <div className="film-card__reviews film-card__row">
                <div className="film-card__reviews-col">

                  {reviews.map((review) => (
                    <div key = {review.id} className="review">
                      <blockquote className="review__quote">
                        <p className="review__text">{review.text}</p>

                        <footer className="review__details">
                          <cite className="review__author">{review.userName}</cite>
                          <time className="review__date" dateTime="2015-11-18">{review.date}</time>
                        </footer>
                      </blockquote>

                      <div className="review__rating">{review.rate}</div>
                    </div>
                  ))}

                </div>
                {/* разделение на колонки */}
                <div className="film-card__reviews-col">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Bohemian Rhapsody</a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Macbeth</a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Aviator</a>
              </h3>
            </article>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Logo />
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MoviePageReviewsScreen;
