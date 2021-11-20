import ListOfFilms from '../list-of-films/list-of-films';
import Footer from '../footer/footer';
import Header from '../header/header';
import {connect, ConnectedProps} from 'react-redux';
import {useEffect} from 'react';
import {ThunkAppDispatch} from '../../types/action';
import {State} from '../../types/state';
import {fetchFavorites} from '../../store/api-actions';

function mapStateToProps({DATA}: State) {
  return {
    favoriteFilms: DATA.favoriteFilms,
  };
}

function mapDispatchToProps(dispatch: ThunkAppDispatch) {
  return {
    onFavoriteListLoad() {
      dispatch(fetchFavorites());
    },
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type MyListProps = ConnectedProps<typeof connector>;

function MyListScreen(props: MyListProps): JSX.Element {
  const {onFavoriteListLoad, favoriteFilms} = props;

  useEffect(()=> {
    onFavoriteListLoad();
  }, [onFavoriteListLoad]);

  return (
    <div className="user-page">
      <Header />
      <ListOfFilms films={favoriteFilms} />
      <Footer/>
    </div>
  );
}

export {MyListScreen};
export default connector(MyListScreen);
