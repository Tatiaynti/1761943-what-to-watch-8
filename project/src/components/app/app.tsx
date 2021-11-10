import {connect, ConnectedProps} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import AddReviewScreen from '../add-review/add-review-screen';
import MainScreen from '../main-screen/main-screen';
import MoviePageScreen from '../movie-page/movie-page-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import PlayerScreen from '../player-screen/player-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import PrivateRoute from '../private-route/private-route';
import PageNotFound from '../page-not-found-screen/page-not-found-screen';
import {State} from '../../types/state';
import Spinner from '../spinner/spinner';
import {isCheckedAuth} from '../../utils/common';
import browserHistory from '../../browser-history';

const mapStateToProps = ({authorizationStatus, isDataLoaded}: State) => ({
  authorizationStatus,
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus, isDataLoaded} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <Spinner />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignInScreen/>
        </Route>
        <Route exact path={AppRoute.Film}>
          <MoviePageScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => <AddReviewScreen />}
        >
        </PrivateRoute>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() =>
            (
              <MyListScreen />)}
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
