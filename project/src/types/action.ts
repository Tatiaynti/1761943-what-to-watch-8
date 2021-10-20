export enum ActionType {
  ChangeGenreToAll = 'genres/all',
  // ChangeGenreToComedies = 'genres/comedies',
  // ChangeGenreToCrime = 'genres/crime',
  // ChangeGenreToDocumentary = 'genres/documentary',
  // ChangeGenreToDramas = 'genres/dramas',
  // ChangeGenreToHorror = 'genres/horror',
  // ChangeGenreToKidsAndFamily = 'genres/kidsAndFamily',
  // ChangeGenreToRomance = 'genres/romance',
  // ChangeGenreToSciFi = 'genres/sciFi ',
  // ChangeGenreToThrillers = 'genres/thrillers',
  LoadList = 'filmList/loadList',
}

export type ChangeGenreToAllAction = {
  type: ActionType.ChangeGenreToAll;
  payload: string;
};

// export type ChangeGenreToComediesAction = {
//   type: ActionType.ChangeGenreToComedies;
//   payload: string;
// };

// export type ChangeGenreToCrimeAction = {
//   type: ActionType.ChangeGenreToCrime;
//   payload: string;
// };

// export type ChangeGenreToDocumentaryAction = {
//   type: ActionType.ChangeGenreToDocumentary;
//   payload: string;
// };

// export type ChangeGenreToDramasAction = {
//   type: ActionType.ChangeGenreToDramas;
//   payload: string;
// };

// export type ChangeGenreToHorrorAction = {
//   type: ActionType.ChangeGenreToHorror;
//   payload: string;
// };

// export type ChangeGenreToKidsAndFamilyAction = {
//   type: ActionType.ChangeGenreToKidsAndFamily;
//   payload: string;
// };

// export type ChangeGenreToRomanceAction = {
//   type: ActionType.ChangeGenreToRomance;
//   payload: string;
// };

// export type ChangeGenreToSciFiAction = {
//   type: ActionType.ChangeGenreToSciFi;
//   payload: string;
// };

// export type ChangeGenreToThrillersAction = {
//   type: ActionType.ChangeGenreToThrillers;
//   payload: string;
// };

export type LoadListAction = {
  type: ActionType.LoadList;
};

export type Actions = ChangeGenreToAllAction | LoadListAction;
