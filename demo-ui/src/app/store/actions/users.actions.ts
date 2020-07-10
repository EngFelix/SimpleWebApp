import {Action} from '@ngrx/store';
import {User} from '../../models/user.model';

// enum that holds all action types
export enum UserActionTypes {
  LoadUsers = '[Users] Load Users',
  UsersLoaded = '[Users] Users Loaded',
  UsersLoadError = '[Users] Users Load Error'
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
}

export class UsersLoaded implements Action {
  readonly type = UserActionTypes.UsersLoaded;

  constructor(public payload: User[]) {
  }
}

export class UserLoadError implements Action {
  readonly type = UserActionTypes.UsersLoadError;

  constructor(public payload: any) {
  }
}

// action types

export type UsersActions = LoadUsers | UserLoadError | UsersLoaded;

export const fromUsersActions = {
  LoadUsers,
  UsersLoaded,
  UserLoadError
}
