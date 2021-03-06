import Footer from '../footer/footer';
import ListOfFilms from '../list-of-films/list-of-films';
import Logo from '../logo/logo';
import {connect, ConnectedProps, useSelector} from 'react-redux';
import {State} from '../../types/state';
import {getFilteredFilms} from '../../selectors/selectors';
import GenresTabs from '../genres-tabs/genres-tabs';
import Spinner from '../spinner/spinner';
import UserBlock from '../user-block/user-block';
import {ThunkAppDispatch} from '../../types/action';
import {fetchPromoFilm} from '../../store/api-actions';
import {useEffect, useState} from 'react';
import {AuthorizationStatus, CATALOG_START_PAGE, FILMS_COUNT_PER_PAGE} from '../../const';
import {getPromoFilm} from '../../selectors/film-data-selectors';
import AddToMyListButton from '../my-list-button/my-list-button';
import {getAuthorizationStatus} from '../../selectors/user-process-selectors';
import PlayButton from '../player/play-button';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onPromoFilmUpload() {
    return dispatch(fetchPromoFilm());
  },
});

const mapStateToProps = (state: State) => ({
  films: getFilteredFilms(state),
  promoFilm: getPromoFilm(state),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type ConnectedMainProps = ConnectedProps<typeof connector>;

function MainScreen(props: ConnectedMainProps): JSX.Element {
  const {promoFilm, films, onPromoFilmUpload} =  props;
  const auth = useSelector((state: State) => getAuthorizationStatus(state));

  const [currentPage, setCurrentPage] = useState<number>(CATALOG_START_PAGE);
  const renderedFilms = films.slice(0, currentPage * FILMS_COUNT_PER_PAGE);
  const isMoreButtonVisible = films.length > renderedFilms.length;

  useEffect(() => {
    setCurrentPage(CATALOG_START_PAGE);
  }, []);

  useEffect(() => {
    if (!promoFilm) {
      onPromoFilmUpload();
    }
  }, [promoFilm, onPromoFilmUpload]);

  const handleMoreButtonClick = () => {
    setCurrentPage((pageCount) => pageCount + 1);
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.image} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Logo />
          </div>

          <UserBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm?.poster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.releaseYear}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton film = {promoFilm}/>
                {
                  auth === AuthorizationStatus.Auth &&
                <AddToMyListButton film = {promoFilm}/>
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresTabs/>
          {films.length > 0 ? <ListOfFilms films={renderedFilms} /> : <Spinner />}
          {isMoreButtonVisible &&
          <div className="catalog__more" onClick={handleMoreButtonClick}>
            <button className="catalog__button" type="button">Show more</button>
          </div>}

        </section>
        <Footer/>
      </div>
    </>
  );
}

export {MainScreen};
export default connector(MainScreen);
