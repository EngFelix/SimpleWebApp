import {createFeatureSelector, createSelector} from '@ngrx/store';
import {userFeatureKey, UserState} from '../reducers/user.reducers';

// Lookup the 'users' feature state managed by NgRx (declared in user.module.ts -> Store.forFeature)
const getUsersState = createFeatureSelector<UserState>(userFeatureKey);

const getLoaded = createSelector(getUsersState, (state: UserState) => state.loaded);
const getLoading = createSelector(getUsersState, (state: UserState) => state.loading);
const getError = createSelector(getUsersState, (state: UserState) => state.error);
const getSelectedId = createSelector(getUsersState, (state: UserState) => state.selectedId);
const getAllUsers = createSelector(getUsersState, getLoaded,
  (state: UserState, isLoaded: boolean) => {
  console.log('hey, I, the allUsers selector, just received this data object and loaded is !' + isLoaded ? 'true' : 'false');
  console.log(state.data);
  return isLoaded ? state.data : [];
});
const getSelectedUsers = createSelector(getAllUsers, getSelectedId, (users, id) => {
  const result = users?.find(user => user.id === id);
  return result ? Object.assign({}, result) : undefined;
});

export const usersQuery = {
  getLoaded,
  getLoading,
  getError,
  getAllUsers,
  getSelectedUsers
}
