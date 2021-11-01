import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {requireAuthorization} from './store/action';
import {fetchFilmAction, checkAuthAction} from './store/api-actions';
import {ThunkAppDispatch} from './types/action';
import {AuthorizationStatus} from './const';
import {redirect} from './store/middlewares/redirect';

const Settings = {
  PROMO_TITLE: 'The Grand Budapest',
  PROMO_GENRE: 'Drama',
  PROMO_RELEASE_YEAR: 2014,
} as const;

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchFilmAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        promoTitle = {Settings.PROMO_TITLE}
        promoGenre = {Settings.PROMO_GENRE}
        promoReleaseYear = {Settings.PROMO_RELEASE_YEAR}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
