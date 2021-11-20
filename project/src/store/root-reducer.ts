import {combineReducers} from 'redux';
import {filmData} from './film-data/film-data';
import {userProcess} from './user-process/user-process';

enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}

const rootReducer = combineReducers({
  [NameSpace.Data]: filmData,
  [NameSpace.User]: userProcess,
});

export {NameSpace, rootReducer};
export type RootState = ReturnType<typeof rootReducer>;
