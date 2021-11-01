enum GenreList {
  AllGenres = 'allGenres',
  Comedies = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Dramas = 'Drama',
  Horror = 'Horror',
  KidsAndFamily = 'Adventure',
  Romance = 'Romance',
  SciFi = 'sciFi',
  Thrillers = 'Thrillers',
}

type Genre = {
  title: string,
  value: GenreList,
};

export {GenreList};
export type {Genre};
