import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {UserState} from './user.reducers';
import {LoadUsers} from './user.actions';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../../models/user.model';
import {usersQuery} from './user.selectors';

export interface UsersViewModel {
  users: User[],
  selectedUsers: User
  loaded: boolean,
  loading: boolean,
  error: any
}

@Injectable()
export class UserFacade {
  users$:         Observable<User[]>  = this.store.select(usersQuery.getAllUsers);
  selectedUser$:  Observable<User>    = this.store.select(usersQuery.getSelectedUsers);
  loaded$:        Observable<boolean> = this.store.select(usersQuery.getLoaded);
  loading$:       Observable<boolean> = this.store.select(usersQuery.getLoading);
  error$:         Observable<any>     = this.store.select(usersQuery.getError);

  vm$:            Observable<UsersViewModel> =
    combineLatest([this.users$, this.selectedUser$, this.loaded$, this.loading$, this.error$])
      .pipe(
        map(([users, selectedUsers, loaded, loading, error]) => {
          return {users, selectedUsers, loaded, loading, error};
        })
      );


  constructor(private store: Store<UserState>) {
    this.loadAll();
    // this.users$.subscribe(users => {
    //   console.log('received user data in facade');
    //   console.log(users);
    // });
  }

  private loadAll() {
    this.store.dispatch(LoadUsers());
  }
}
