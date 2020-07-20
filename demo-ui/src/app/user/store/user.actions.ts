import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { User } from '../user.model';

//load Users
export const loadUsers = createAction(
  '[User Facade] Load Users',
  props<{}>()
);

export const loadUsersSuccess = createAction(
  '[User Effect] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User Effect] Load Users Failure',
  props<{ error: any }>()
);

// Add User
export const addUser = createAction(
  '[User Facade] Add User',
  props<{ user: User }>()
);
export const addUserSuccess = createAction(
  '[User Effect] Add User Success',
  props<{ user: User }>()
);
export const addUserFailure = createAction(
  '[User Effect] Add User Failure',
  props<{ error: any }>()
);

// ------- Boiler plate code below -------

export const upsertUser = createAction(
  '[User/API] Upsert User',
  props<{ user: User }>()
);

export const addUsers = createAction(
  '[User/API] Add Users',
  props<{ users: User[] }>()
);

export const upsertUsers = createAction(
  '[User/API] Upsert Users',
  props<{ users: User[] }>()
);

export const updateUser = createAction(
  '[User/API] Update User',
  props<{ user: Update<User> }>()
);

export const updateUsers = createAction(
  '[User/API] Update Users',
  props<{ users: Update<User>[] }>()
);

export const deleteUser = createAction(
  '[User/API] Delete User',
  props<{ id: string }>()
);

export const deleteUsers = createAction(
  '[User/API] Delete Users',
  props<{ ids: string[] }>()
);

export const clearUsers = createAction(
  '[User/API] Clear Users'
);
