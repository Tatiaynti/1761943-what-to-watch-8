import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mocks/films';
import {reviews} from './mocks/reviews';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const Settings = {
  PROMO_TITLE: 'The Grand Budapest',
  PROMO_GENRE: 'Drama',
  PROMO_RELEASE_YEAR: 2014,
} as const;

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        promoTitle = {Settings.PROMO_TITLE}
        promoGenre = {Settings.PROMO_GENRE}
        promoReleaseYear = {Settings.PROMO_RELEASE_YEAR}
        films = {films}
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
