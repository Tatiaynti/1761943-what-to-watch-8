import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {dropToken, setToken, Token} from '../services/token';
import {ThunkActionResult} from '../types/action';
import {AuthData} from '../types/auth-data';
import {FilmFromServerType} from '../types/film';
import {loadFilms, requireAuthorization, requireLogout, redirectToRoute} from './action';

const fetchFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmFromServerType[]>(APIRoute.Films);
    dispatch(loadFilms(data));
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    setToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  };

const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

export {fetchFilmAction, checkAuthAction, loginAction, logoutAction};
