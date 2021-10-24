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
import {Film} from '../../types/film';
import {Review} from '../../types/reviews';

type AppScreenProps = {
  promoTitle: string;
  promoGenre: string;
  promoReleaseYear: number;
  films: Film[];
  reviews: Review[];
}

function App({promoTitle, promoGenre, promoReleaseYear, films, reviews}: AppScreenProps): JSX.Element {
  const [, secondFilm] = films;
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
          <MoviePageScreen film = {secondFilm as Film} />
        </Route>
        <Route exact path={AppRoute.FilmDetails}>
          <MoviePageDetailsScreen
            film = {secondFilm as Film}
          />
        </Route>
        <Route exact path={AppRoute.FilmReviews}>
          <MoviePageReviewsScreen
            reviews = {reviews}
            film = {secondFilm as Film}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.AddReview}
          render={() => <AddReviewScreen film = {secondFilm as Film} />}
          authorizationStatus={AuthorizationStatus.Auth} // после разработки закрыть для неавторизованных
        >
        </PrivateRoute>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() =>
            (
              <MyListScreen
                films = {films}
              />)}
          authorizationStatus={AuthorizationStatus.Auth} // после разработки закрыть для неавторизованных
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player}>
          <PlayerScreen film = {secondFilm as Film} />
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
