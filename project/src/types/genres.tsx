enum GenreList {
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

type Genre = {
  title: string,
  value: GenreList,
};

export {GenreList};
export type {Genre};
