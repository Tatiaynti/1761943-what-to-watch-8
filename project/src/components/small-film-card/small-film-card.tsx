import {FilmCards} from '../../types/film';

type FilmCardProps = {
  films: FilmCards;
  onMouseEnter: (id: string) => void;
}

function FilmCardScreen(props: FilmCardProps): JSX.Element {
  const {films, onMouseEnter} = props;

  return (
    <div className="catalog__films-list">
      {films.map((film) => {
        const keyValue = `${film.id}`;
        return (
          <article key={keyValue} className="small-film-card catalog__films-card" id={`film-${film.id}`} onMouseEnter={() => onMouseEnter(film.id)}>
            <div className="small-film-card__image">
              <img src={film.image} alt="Johnny English" width="280" height="175" />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">{film.title}</a>
            </h3>
          </article>
        );
      })}
    </div>
  );
}

export default FilmCardScreen;
