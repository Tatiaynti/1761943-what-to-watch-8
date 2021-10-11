import ListOfFilms from '../list-of-films/list-of-films';
import {FilmCards} from '../../types/film';
import Footer from '../footer/footer';
import Header from '../header/header';

type MyListProps = {
  films: FilmCards;
}

function MyListScreen({films}:MyListProps): JSX.Element {
  return (
    <div className="user-page">
      <Header />
      <ListOfFilms films={films} />
      <Footer/>
    </div>
  );
}

export default MyListScreen;
