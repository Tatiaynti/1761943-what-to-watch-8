import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import {setGenre} from '../../store/action';
import {Actions} from '../../types/action';
import {Genre, Genres as GenreTypes} from '../../types/genres';
import {State} from '../../types/state';

const GENRES: Genre[] = [
  {
    id: '0',
    title: 'All genres',
    value: GenreTypes.AllGenres,
  },
  {
    id: '1',
    title: 'Crime',
    value: GenreTypes.Crime,
  },
  {
    id: '2',
    title: 'Comedies',
    value: GenreTypes.Comedies,
  },
  {
    id: '3',
    title: 'Documentary',
    value: GenreTypes.Documentary,
  },
  {
    id: '4',
    title: 'Dramas',
    value: GenreTypes.Dramas,
  },
  {
    id: '5',
    title: 'Horror',
    value: GenreTypes.Horror,
  },
  {
    id: '6',
    title: 'Kids & Family',
    value: GenreTypes.KidsAndFamily,
  },
  {
    id: '7',
    title: 'Romance',
    value: GenreTypes.Romance,
  },
  {
    id: '8',
    title: 'Sci-Fi',
    value: GenreTypes.SciFi,
  },
  {
    id: '9',
    title: 'Thrillers',
    value: GenreTypes.Thrillers,
  },
];

const mapStateToProps = (state: State) => ({
  activeGenre: state.genre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onGenreClick(genre: GenreTypes) {
    dispatch(setGenre(genre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type GenreProps = ConnectedProps<typeof connector> & {
  activeGenre: GenreTypes,
}

function GenresTabs(props: GenreProps): JSX.Element {
  const {activeGenre, onGenreClick} = props;

  const handleGenreClick = (genre: GenreTypes) => (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onGenreClick(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {GENRES.map(({id, title, value}) => (
        <li
          key={id}
          className={`catalog__genres-item ${value === activeGenre ? 'catalog__genres-item--active' : ''} `}
        >
          <a
            href={'/'}
            className="catalog__genres-link"
            id={`genre-${value}`}
            onClick={handleGenreClick(value)}
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default connector(GenresTabs);
