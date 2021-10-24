import {ActionType} from '../types/action';
import {GenreList} from '../types/genres';

const setGenre = (genre: GenreList) => ({
  type: ActionType.ChangeGenre,
  payload: {genre},
} as const);

export {setGenre};
