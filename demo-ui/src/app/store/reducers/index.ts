import {userReducer, UserState} from '../../user/store/user.reducers';
import {ActionReducer} from '@ngrx/store';


// export const reducers: ActionReducerMap<UserState> = {
//   users: reducer
// }
export const UserReducer: ActionReducer<UserState> = userReducer;
