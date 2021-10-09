import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mocks/films';

const Settings = {
  CARDS_COUNT: 16,
  PROMO_TITLE: 'The Grand Budapest',
  PROMO_GENRE: 'Drama',
  PROMO_RELEASE_YEAR: 2014,
} as const;

ReactDOM.render(
  <React.StrictMode>
    <App
      cardsCount = {Settings.CARDS_COUNT}
      promoTitle = {Settings.PROMO_TITLE}
      promoGenre = {Settings.PROMO_GENRE}
      promoReleaseYear = {Settings.PROMO_RELEASE_YEAR}
      films = {films}
    />
  </React.StrictMode>,
  document.getElementById('root'));
