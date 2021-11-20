import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import { getGenre } from '../../selectors/film-data-selectors';
import {setGenre} from '../../store/action';
import {Actions} from '../../types/action';
import {GenreList} from '../../types/genres';
import {State} from '../../types/state';

const genreTypeToReadable = {
  [GenreList.AllGenres]: 'All genres',
  [GenreList.Crime]: 'Crime',
  [GenreList.Comedies]: 'Comedies',
  [GenreList.Documentary]: 'Documentary',
  [GenreList.Dramas]: 'Dramas',
  [GenreList.Horror]: 'Horror',
  [GenreList.KidsAndFamily]: 'Kids & Family',
  [GenreList.Romance]: 'Romance',
  [GenreList.SciFi]: 'Sci-Fi',
  [GenreList.Thrillers]: 'Thrillers',
};

const mapStateToProps = (state: State) => ({
  activeGenre: getGenre(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onGenreClick(genre: GenreList) {
    dispatch(setGenre(genre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type GenreProps = ConnectedProps<typeof connector> & {
  activeGenre: GenreList,
}

function GenresTabs(props: GenreProps): JSX.Element {
  const {activeGenre, onGenreClick} = props;

  const handleGenreClick = (genre: GenreList) => (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onGenreClick(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {Object.values(GenreList).map((value) => (
        <li
          key={value}
          className={`catalog__genres-item ${value === activeGenre ? 'catalog__genres-item--active' : ''} `}
        >
          <a
            href={'/'}
            className="catalog__genres-link"
            id={`genre-${value}`}
            onClick={handleGenreClick(value)}
          >
            {genreTypeToReadable[value]}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default connector(GenresTabs);
