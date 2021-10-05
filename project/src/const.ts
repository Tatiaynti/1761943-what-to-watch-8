enum AppRoute {
  SignIn = '/login',
  AddReview = '/films/:id/review',
  Film = '/films/:id',
  FilmDetails = '/films/:id/details',
  FilmReviews = '/films/:id/reviews',
  MyList = '/mylist',
  Player = '/player/:id',
  Main = '/'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export {AppRoute, AuthorizationStatus};
