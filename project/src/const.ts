const MAX_RELATED_FILMS_COUNT = 4;

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

export {AppRoute, AuthorizationStatus, APIRoute, MAX_RELATED_FILMS_COUNT};
