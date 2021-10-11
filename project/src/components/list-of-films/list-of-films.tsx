import FilmCardScreen from '../small-film-card/small-film-card';
import {FilmCards} from '../../types/film';
import {useState} from 'react';

type ListOfFilmProps = {
  films: FilmCards;
}

function ListOfFilms({films}:ListOfFilmProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCard, setFilmCardActive] = useState<string>();
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <FilmCardScreen
        films={films}
        onMouseEnter={(id: string) => setFilmCardActive(id)}
      />
    </section>
  );
}

export default ListOfFilms;
