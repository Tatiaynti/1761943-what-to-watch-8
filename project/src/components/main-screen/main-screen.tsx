import Footer from '../footer/footer';
import ListOfFilms from '../list-of-films/list-of-films';
import Logo from '../logo/logo';
import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {getFilteredFilms} from '../../selectors/selectors';
import GenresTabs from '../genres-tabs/genres-tabs';
import Spinner from '../spinner/spinner';

type MainScreenProps = {
  promoTitle: string;
  promoGenre: string;
  promoReleaseYear: number;
};

const mapStateToProps = (state: State) => ({
  films: getFilteredFilms(state),
});

const connector = connect(mapStateToProps);

type ConnectedMainProps = ConnectedProps<typeof connector> & MainScreenProps;

function MainScreen(props: ConnectedMainProps): JSX.Element {
  const {promoTitle, promoGenre, promoReleaseYear, films} =  props;

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
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
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoTitle}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoGenre}</span>
                <span className="film-card__year">{promoReleaseYear}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresTabs/>
          {films.length > 0 ? <ListOfFilms films={films} /> : <Spinner />}

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}

export {MainScreen};
export default connector(MainScreen);
