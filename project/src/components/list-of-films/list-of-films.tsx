import FilmCardScreen from '../small-film-card/small-film-card';
import {FilmCards} from '../../types/film';

type ListOfFilmProps = {
  films: FilmCards;
}

function ListOfFilms({films}:ListOfFilmProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <FilmCardScreen films={films}/>
    </section>

  );
}

export default ListOfFilms;
