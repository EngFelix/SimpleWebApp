import {reducer, UsersState} from './users.reducers';
import {ActionReducer, ActionReducerMap} from '@ngrx/store';



// export const reducers: ActionReducerMap<UserState> = {
//   users: reducer
// }
export const UserReducer: ActionReducer<UsersState> = reducer;
