import {User} from '../../models/user.model';
import {createReducer, on} from '@ngrx/store';

import * as UserActions from '../actions/user.actions';

export const userFeatureKey = 'users';

// Define the UserState interface
export interface UserState {
  data: User[],
  loaded: boolean,
  loading: boolean,
  selectedId?: string | number,
  error?: any
}

// This represents the initial state of the User feature (used by the userReducer)
export const initialState: UserState = {
  data: [],
  loaded: false,
  loading: false
};

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserActions.LoadUsers, state => ({...state, loading: true})),
  on(UserActions.UsersLoaded, (state, payload) => ({
    ...state,
    data: payload.payload,
    loaded: true,
    loading: false
  })),
  on(UserActions.UsersLoadError, (state, {err}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: err
  }))
);

// export function reducer(state: UserState = initialState, action: UserActions): UserState {
//   switch (action.type) {
//     case UserActionTypes.LoadUsers: {
//       state = {
//         ...state,
//         loading: true
//       };
//       break;
//     }
//     case UserActionTypes.UsersLoaded: {
//       console.log('users are loaded');
//       console.log('state before');
//       console.log(state);
//
//       state = {
//         ...state,
//         users: action.payload,
//         loading: false,
//         loaded: true
//       };
//       console.log('sate after');
//       console.log(state);
//
//       break;
//     }
//     case UserActionTypes.UsersLoadError: {
//       state = {
//         ...state,
//         loading: false,
//         loaded: false,
//         error: action.payload
//       };
//       break;
//     }
//   }
//   return state;
// }
