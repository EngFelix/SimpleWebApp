import {createAction, props} from '@ngrx/store';
import {User} from '../../models/user.model';

export enum UserActionTypes {
  LoadUsers = '[Users] Load Users',
  UsersLoaded = '[Users] Users Loaded',
  UsersLoadError = '[Users] Users Load Error'
}

// is of type: : ActionCreator<UserActionTypes.LoadUsers>
export const LoadUsers = createAction(UserActionTypes.LoadUsers);
export const UsersLoaded = createAction(UserActionTypes.UsersLoaded, props<{ payload: User[] }>());
export const UsersLoadError = createAction(UserActionTypes.UsersLoadError, props<{ err: any }>());
