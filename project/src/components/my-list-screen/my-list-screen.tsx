import ListOfFilms from '../list-of-films/list-of-films';
import Footer from '../footer/footer';
import Header from '../header/header';
import {useSelector} from 'react-redux';
import {State} from '../../types/state';

function MyListScreen(): JSX.Element {
  const films = useSelector((state: State) => state.films);

  return (
    <div className="user-page">
      <Header />
      <ListOfFilms films={films} />
      <Footer/>
    </div>
  );
}

export default MyListScreen;
