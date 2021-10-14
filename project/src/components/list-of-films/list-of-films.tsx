import FilmCardScreen from '../small-film-card/small-film-card';
import {useState} from 'react';
import {Film} from '../../types/film';

type ListOfFilmProps = {
  films: Film[];
}

function ListOfFilms({films}:ListOfFilmProps): JSX.Element {
  const [, setFilmCardActive] = useState<string>();
  function toggleActiveCardById(id: string) {
    setFilmCardActive(id);
  }

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <FilmCardScreen
        films={films}
        onMouseEnter={toggleActiveCardById}
      />
    </section>
  );
}

export default ListOfFilms;
