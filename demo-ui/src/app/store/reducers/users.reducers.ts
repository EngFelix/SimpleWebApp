import {User} from '../../models/user.model';
import {UserActionTypes, UsersActions} from '../actions/users.actions';

export interface UsersState {
  data: User[],
  loaded: boolean,
  loading: boolean,
  selectedId?: string | number,
  error?: any
}

export const initialState: UsersState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(state: UsersState = initialState, action: UsersActions): UsersState {
  switch (action.type) {
    case UserActionTypes.LoadUsers: {
      state = {
        ...state,
        loading: true
      };
      break;
    }
    case UserActionTypes.UsersLoaded: {
      state = {
        ...state,
        data: action.payload,
        loading: false,
        loaded: true
      };
      break;
    }
    case UserActionTypes.UsersLoadError: {
      state = {
        ...state,
        loading: false,
        loaded: false
      };
      break;
    }
  }
  return state;
}
