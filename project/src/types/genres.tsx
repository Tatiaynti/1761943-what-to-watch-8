export enum Genres {
  AllGenres = 'allGenres',
  Comedies = 'comedies',
  Crime = 'crime',
  Documentary = 'documentary',
  Dramas = 'dramas',
  Horror = 'horror',
  KidsAndFamily = 'kidsAndFamily',
  Romance = 'romance',
  SciFi = 'sci-Fi',
  Thrillers = 'thrillers',
}

export type Genre = {
  id: string,
  title: string,
  value: Genres,
};
