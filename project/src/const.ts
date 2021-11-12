const MAX_RELATED_FILMS_COUNT = 4;
const CATALOG_START_PAGE = 1;
const FILMS_COUNT_PER_PAGE = 8;

enum AppRoute {
  SignIn = '/login',
  AddReview = '/films/:id/review',
  Film = '/films/:id',
  MyList = '/mylist',
  Player = '/player/:id',
  Main = '/'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const APIRoute = {
  Films: '/films',
  Login: '/login',
  Logout: '/logout',
  Favorite: '/favorite',
  PromoFilm: '/promo',
  Comments: (id: string): string => `/comments/${id}`,
  RelatedFilms: (id: string): string => `/films/${id}/similar`,
};

export {AppRoute, AuthorizationStatus, APIRoute, MAX_RELATED_FILMS_COUNT, CATALOG_START_PAGE, FILMS_COUNT_PER_PAGE};
