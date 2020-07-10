import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UsersState} from '../reducers/users.reducers';

// Lookup the 'users' feature state managed by NgRx (declared in users.module.ts -> Store.forFeature)
const getUsersState = createFeatureSelector<UsersState>('users');

const getLoaded = createSelector(getUsersState, (state: UsersState) => state.loaded);
const getLoading = createSelector(getUsersState, (state: UsersState) => state.loading);
const getError = createSelector(getUsersState, (state: UsersState) => state.error);
const getSelectedId = createSelector(getUsersState, (state: UsersState) => state.selectedId);
const getAllUsers = createSelector(getUsersState, getLoaded, (state: UsersState, isLoaded: boolean) => {
  return isLoaded ? state.data : [];
});
const getSelectedUsers = createSelector(getAllUsers, getSelectedId, (users, id) => {
  const result = users.find(user => user.id === id);
  return result ? Object.assign({}, result) : undefined;
});

export const usersQuery = {
  getLoaded,
  getLoading,
  getError,
  getAllUsers,
  getSelectedUsers
}
