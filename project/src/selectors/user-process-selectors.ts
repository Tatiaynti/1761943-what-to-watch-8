import {AuthorizationStatus} from '../const';
import {State} from '../types/state';
import {NameSpace} from '../store/root-reducer';

const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export {getAuthorizationStatus};
