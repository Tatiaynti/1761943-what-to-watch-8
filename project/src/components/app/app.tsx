import { Fragment } from 'react';
import {Switch, Route, BrowserRouter, Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import AddReviewScreen from '../add-review/add-review-screen';
import MainScreen from '../main-screen/main-screen';
import MoviePageDetailsScreen from '../movie-page-details/movie-page-details-screen';
import MoviePageReviewsScreen from '../movie-page-reviews/movie-page-reviews-screen';
import MoviePageScreen from '../movie-page/movie-page-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import PlayerScreen from '../player-screen/player-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';

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
        <Route exact path={AppRoute.AddReview}>
          <AddReviewScreen />
        </Route>
        <Route exact path={AppRoute.MyList}>
          <MyListScreen />
        </Route>
        <Route exact path={AppRoute.Player}>
          <PlayerScreen />
        </Route>
        <Route
          render={(props) => (
            <Fragment>
              <h1>
                  404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to="/">Go to main page</Link>
            </Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
