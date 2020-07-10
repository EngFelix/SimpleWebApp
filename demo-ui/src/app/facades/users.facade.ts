import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {UsersState} from '../store/reducers/users.reducers';
import {LoadUsers} from '../store/actions/users.actions';
import {usersQuery} from '../store/selectors/users.selectors';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../models/user.model';

export interface UsersViewModel {
  users: User[],
  selectedUsers: User
  loaded: boolean,
  loading: boolean,
  error: any
}

@Injectable()
export class UsersFacade {
  allUsers$:      Observable<User[]>  = this.store.select(usersQuery.getAllUsers);
  selectedUser$:  Observable<User>    = this.store.select(usersQuery.getSelectedUsers);
  loaded$:        Observable<boolean> = this.store.select(usersQuery.getLoaded);
  loading$:       Observable<boolean> = this.store.select(usersQuery.getLoading);
  error$:         Observable<any>     = this.store.select(usersQuery.getError);

  vm$:            Observable<UsersViewModel> =
    combineLatest([this.allUsers$, this.selectedUser$, this.loaded$, this.loading$, this.error$])
      .pipe(
        map(([users, selectedUsers, loaded, loading, error]) => {
          return {users, selectedUsers, loaded, loading, error};
        })
      );


  constructor(private store: Store<UsersState>) {
  }

  loadAll() {
    this.store.dispatch(new LoadUsers());
  }
}
