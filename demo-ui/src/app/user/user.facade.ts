import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {UserState} from './user.reducers';
import {loadUsers, addUser} from './store/user.actions';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from './user.model';
import * as fromSelectors from './store/user.selectors';

export interface UsersViewModel {
  users: User[],
  selectedUsers: User
  loaded: boolean,
  loading: boolean,
  error: any
}

@Injectable()
export class UserFacade {
  users$:         Observable<User[]>  = this.store.select(fromSelectors.selectUsers);
  selectedUser$:  Observable<User>    = this.store.select(fromSelectors.selectUser);
  loaded$:        Observable<boolean> = this.store.select();
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
    this.store.dispatch(loadUsers({}));
  }

  createUser(user: User) {
    this.store.dispatch(addUser({user}))
  }
}
