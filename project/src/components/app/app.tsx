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

type AppScreenProps = {
  cardsCount: number;
  promoTitle: string;
  promoGenre: string;
  promoReleaseYear: number;
}

function App({cardsCount, promoTitle, promoGenre, promoReleaseYear}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen
            cardsCount={cardsCount}
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
          <MoviePageReviewsScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => <AddReviewScreen />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyListScreen />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player}>
          <PlayerScreen />
        </Route>
        <Route
          render={(props) => (
            <PageNotFound />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
