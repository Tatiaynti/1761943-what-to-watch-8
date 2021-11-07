import {useEffect, useState} from 'react';
import {MAX_RELATED_FILMS_COUNT} from '../../const';
import {fetchRelatedFilms} from '../../store/api-actions';
import {Film} from '../../types/film';
import ListOfFilms from '../list-of-films/list-of-films';
import Spinner from '../spinner/spinner';

type RelatedFilmsProps = {
  filmId: string,
}

function RelatedFilms(props: RelatedFilmsProps): JSX.Element {
  const {filmId} = props;

  const [films, setFilms] = useState<Film[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRelatedFilms(filmId)
      .then((data: any) => {
        setFilms(data);
        setIsLoading(false);
      });
  }, [filmId]);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      {
        isLoading ? <Spinner/>
          : <ListOfFilms films={films.slice(0, MAX_RELATED_FILMS_COUNT)}/>
      }
    </section>
  );
}

export default RelatedFilms;
