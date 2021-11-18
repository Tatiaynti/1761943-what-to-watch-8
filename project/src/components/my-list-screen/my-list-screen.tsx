import ListOfFilms from '../list-of-films/list-of-films';
import Footer from '../footer/footer';
import Header from '../header/header';
import {connect, ConnectedProps} from 'react-redux';
import {useEffect, useState} from 'react';
import {Film} from '../../types/film';
import {fetchFavorites} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/action';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onFavoriteFilmsLoad() {
    return dispatch(fetchFavorites());
  },
});

const connector = connect(null, mapDispatchToProps);

type MyListProps = ConnectedProps<typeof connector>

function MyListScreen(props: MyListProps): JSX.Element {
  const {onFavoriteFilmsLoad: getFavoriteFilms} = props;
  const [myList, setMyList] = useState<Film[]>([]);

  useEffect(() => {
    getFavoriteFilms()
      .then((films: any) => setMyList(films));
  }, [getFavoriteFilms]);

  return (
    <div className="user-page">
      <Header />
      <ListOfFilms films={myList} />
      <Footer/>
    </div>
  );
}

export {MyListScreen};
export default connector(MyListScreen);
