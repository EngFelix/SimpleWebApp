import {reducer, UserState} from './user.reducers';
import {ActionReducer, ActionReducerMap} from '@ngrx/store';



// export const reducers: ActionReducerMap<UserState> = {
//   users: reducer
// }
export const UserReducer: ActionReducer<UserState> = reducer;
