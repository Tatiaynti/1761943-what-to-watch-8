import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import {generatePath, useParams} from 'react-router';
import {useSelector} from 'react-redux';
import {State} from '../../types/state';
import UserBlock from '../user-block/user-block';
import {getCurrentFilm} from '../../utils/common';
import Footer from '../footer/footer';
import {Fragment} from 'react';
import FilmTabs from '../tabs/tabs';
import {AppRoute, AuthorizationStatus} from '../../const';
import RelatedFilms from '../related-list/related-list';
import AddToMyListButton from '../my-list-button/my-list-button';
import {getFilms} from '../../selectors/film-data-selectors';
import {getAuthorizationStatus} from '../../selectors/user-process-selectors';
import PlayButton from '../player/play-button';

function MoviePageScreen(): JSX.Element {
  const films = useSelector((state: State) => getFilms(state));
  const auth = useSelector((state: State) => getAuthorizationStatus(state));

  const {id} = useParams<{ id: string }>();
  const currentFilm = getCurrentFilm(films, id);

  return (
    <Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.image} alt="The Grand Budapest Hotel" />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <div className="logo">
              <Logo/>
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
                <PlayButton film = {currentFilm}/>
                {
                  auth === AuthorizationStatus.Auth &&
                <AddToMyListButton film = {currentFilm} />
                }
                { auth === AuthorizationStatus.Auth && <Link to={generatePath(AppRoute.AddReview, {id: currentFilm.id})} className="btn film-card__button">Add review</Link>}
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
              <FilmTabs film={currentFilm}/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <RelatedFilms filmId={currentFilm.id} />
        <Footer/>
      </div>
    </Fragment>
  );
}

export default MoviePageScreen;
