import {combineReducers} from 'redux';
import {filmData} from './film-data/film-data';
import {userProcess} from './user-process/user-process';

enum NameSpace {
  data = 'DATA',
  user = 'USER',
}

const rootReducer = combineReducers({
  [NameSpace.data]: filmData,
  [NameSpace.user]: userProcess,
});

export {NameSpace, rootReducer};
export type RootState = ReturnType<typeof rootReducer>;
