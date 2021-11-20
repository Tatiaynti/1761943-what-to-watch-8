import {useEffect, useState} from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {MAX_RELATED_FILMS_COUNT} from '../../const';
import {fetchRelatedFilms} from '../../store/api-actions';
import { ThunkAppDispatch } from '../../types/action';
import { State } from '../../types/state';
import ListOfFilms from '../list-of-films/list-of-films';
import Spinner from '../spinner/spinner';

type RelatedFilmsProp = {
  filmId: string,
}

function mapStateToProps({DATA}: State) {
  return {
    films: DATA.films,
    similarFilms: DATA.similarFilms,
  };
}

function mapDispatchToProps(dispatch: ThunkAppDispatch) {
  return {
    onSimilarFilmsLoad(filmId: string) {
      dispatch(fetchRelatedFilms(filmId));
    },
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type RelatedFilmsProps = ConnectedProps<typeof connector> & RelatedFilmsProp;

function RelatedFilms(props: RelatedFilmsProps): JSX.Element {
  const {onSimilarFilmsLoad, similarFilms, filmId} = props;

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    onSimilarFilmsLoad(filmId);
    setIsLoading(false);
  },[onSimilarFilmsLoad, filmId]);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      {
        isLoading ? <Spinner/>
          : <ListOfFilms films={similarFilms.slice(0, MAX_RELATED_FILMS_COUNT)}/>
      }
    </section>
  );
}

export {RelatedFilms};
export default connector(RelatedFilms);
