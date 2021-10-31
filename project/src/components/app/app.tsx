import {connect, ConnectedProps} from 'react-redux';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import AddReviewScreen from '../add-review/add-review-screen';
import MainScreen from '../main-screen/main-screen';
import MoviePageDetailsScreen from '../movie-page-details/movie-page-details-screen';
import MoviePageReviewsScreen from '../movie-page-reviews/movie-page-reviews-screen';
import MoviePageScreen from '../movie-page/movie-page-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import PlayerScreen from '../player-screen/player-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import PrivateRoute from '../private-route/private-route';
import PageNotFound from '../page-not-found-screen/page-not-found-screen';
import {State} from '../../types/state';
import Spinner from '../spinner/spinner';
import {isCheckedAuth} from '../../utils/common';

type AppScreenProps = {
  promoTitle: string;
  promoGenre: string;
  promoReleaseYear: number;
}

const mapStateToProps = ({authorizationStatus, isDataLoaded}: State) => ({
  authorizationStatus,
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector> & AppScreenProps;

function App(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus, isDataLoaded, promoTitle, promoGenre, promoReleaseYear} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen
            promoTitle={promoTitle}
            promoGenre={promoGenre}
            promoReleaseYear={promoReleaseYear}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignInScreen/>
        </Route>
        <Route exact path={AppRoute.Film}>
          <MoviePageScreen />
        </Route>
        <Route exact path={AppRoute.FilmDetails}>
          <MoviePageDetailsScreen />
        </Route>
        <Route exact path={AppRoute.FilmReviews}>
          <MoviePageReviewsScreen reviews={[]} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => <AddReviewScreen />}
          authorizationStatus={AuthorizationStatus.Auth} // после разработки закрыть для неавторизованных
        >
        </PrivateRoute>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() =>
            (
              <MyListScreen />)}
          authorizationStatus={AuthorizationStatus.Auth} // после разработки закрыть для неавторизованных
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player}>
          <PlayerScreen />
        </Route>
        <Route
          render={() => (
            <PageNotFound />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
