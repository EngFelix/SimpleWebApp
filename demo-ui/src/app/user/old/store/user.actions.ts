import {createAction, props} from '@ngrx/store';
import {User} from '../../models/user.model';

// is of type: : ActionCreator<UserActionTypes.LoadUsers>
export const LoadUsers = createAction('[Users] Load Users');
export const UsersLoaded = createAction('[Users] Users Loaded', props<{ payload: User[] }>());
export const UsersLoadError = createAction('[Users] Users Load Error', props<{ err: any }>());
