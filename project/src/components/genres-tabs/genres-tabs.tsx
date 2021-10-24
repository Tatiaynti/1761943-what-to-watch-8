import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from 'redux';
import {setGenre} from '../../store/action';
import {Actions} from '../../types/action';
import {Genre, GenreList} from '../../types/genres';
import {State} from '../../types/state';

const GENRES: Genre[] = [
  {
    title: 'All genres',
    value: GenreList.AllGenres,
  },
  {
    title: 'Crime',
    value: GenreList.Crime,
  },
  {
    title: 'Comedies',
    value: GenreList.Comedies,
  },
  {
    title: 'Documentary',
    value: GenreList.Documentary,
  },
  {
    title: 'Dramas',
    value: GenreList.Dramas,
  },
  {
    title: 'Horror',
    value: GenreList.Horror,
  },
  {
    title: 'Kids & Family',
    value: GenreList.KidsAndFamily,
  },
  {
    title: 'Romance',
    value: GenreList.Romance,
  },
  {
    title: 'Sci-Fi',
    value: GenreList.SciFi,
  },
  {
    title: 'Thrillers',
    value: GenreList.Thrillers,
  },
];

const mapStateToProps = (state: State) => ({
  activeGenre: state.genre,
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
      {GENRES.map(({title, value}) => (
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
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default connector(GenresTabs);
