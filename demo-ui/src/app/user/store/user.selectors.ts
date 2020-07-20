import {createFeatureSelector, createSelector} from '@ngrx/store';
import {usersFeatureKey, UserState, selectAll} from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>(
  usersFeatureKey
);

export const selectUsers = createSelector(selectUserState, selectAll);
export const selectUser = createSelector(selectUserState, (state: UserState) => state.selectedUser);
export const selectUsersloading = createSelector(selectUserState, state => state. )
