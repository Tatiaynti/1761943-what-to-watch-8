import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import {requireAuthorization} from './store/action';
import {fetchFilmAction, checkAuthAction} from './store/api-actions';
import {AuthorizationStatus} from './const';
import {redirect} from './store/middlewares/redirect';
import {rootReducer} from './store/root-reducer';
import {configureStore} from '@reduxjs/toolkit';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

export {api};
