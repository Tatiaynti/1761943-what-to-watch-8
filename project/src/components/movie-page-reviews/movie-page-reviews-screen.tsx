import {useHistory} from 'react-router';
import {AppRoute} from '../../const';
import {Film} from '../../types/film';
import {ReviewsList} from '../../types/reviews';
import Logo from '../logo/logo';

type MovieReviewsProps = {
  reviews: ReviewsList;
  film: Film;
}

function MoviePageReviewsScreen(props: MovieReviewsProps): JSX.Element {
  const {reviews, film} = props;
  const {image, poster, title, genre, releaseYear} = film;
  const history = useHistory();

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={image} alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Logo />
            </div>

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

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{releaseYear}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => history.push(AppRoute.Player.replace(':id', film.id))}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a className="btn film-card__button" onClick={() => history.push(AppRoute.AddReview.replace(':id', film.id))}>Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={poster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item">
                    <a className="film-nav__link" onClick={() => history.push(AppRoute.Film.replace(':id', film.id))}>Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a className="film-nav__link" onClick={() => history.push(AppRoute.FilmDetails.replace(':id', film.id))}>Details</a>
                  </li>
                  <li className="film-nav__item film-nav__item--active">
                    <a className="film-nav__link" onClick={() => history.push(AppRoute.FilmReviews.replace(':id', film.id))}>Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-card__reviews film-card__row">
                <div className="film-card__reviews-col">

                  {reviews.map((review) => {
                    const keyValue = `${review.id}`;
                    return (
                      <div key = {keyValue} className="review">
                        <blockquote className="review__quote">
                          <p className="review__text">{review.text}</p>

                          <footer className="review__details">
                            <cite className="review__author">{review.userName}</cite>
                            <time className="review__date" dateTime="2015-11-18">{review.date}</time>
                          </footer>
                        </blockquote>

                        <div className="review__rating">{review.rate}</div>
                      </div>
                    );
                  })}

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
