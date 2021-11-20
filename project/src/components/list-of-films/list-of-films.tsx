import FilmCardScreen from '../small-film-card/small-film-card';
import {Film} from '../../types/film';
import {useActiveFilmCard} from '../../hooks/use-active-card-state';

type ListOfFilmProps = {
  films: Film[];
}

function ListOfFilms({films}:ListOfFilmProps): JSX.Element {
  const [toggleActiveCardById] = useActiveFilmCard();

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <div className="catalog__films-list">
        {films.map((film) =>
          (
            <FilmCardScreen
              key={film.id}
              film={film}
              onMouseEnter={toggleActiveCardById}
            />))}
      </div>
    </section>
  );
}

export default ListOfFilms;
