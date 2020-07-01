import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {error} from '@angular/compiler/src/util';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export abstract class UserService {
  public abstract readonly users$: Observable<Array<IUser>>;

  abstract updateUser(userId: number, userChanges: Partial<IUser>): void;

  abstract createUser(user: IUser): void;

  abstract deleteUser(userToDelete: IUser): void;
}


@Injectable({
  providedIn: 'root'
})
export class UserServiceImpl implements UserService {
  private _users = new BehaviorSubject<Array<IUser>>([]);
  private apiUrl = 'http://localhost:8080/api';
  readonly users$ = this._users.asObservable();

  constructor(private httpClient: HttpClient) {
    this.loadAll();
    this.deleteUser({id: 10000, birthDate: new Date(), lastName: '', firstName: ''});
  }

  private loadAll(): void {
    const getUsers$ = this.httpClient.get<Array<IUser>>(this.apiUrl + '/users')
      .subscribe(
        data => this._users.next(data),
        error => console.log('UserService: error loading users', error)
      );

    // Todo: show loading
  }

  createUser(user: IUser): void {
    this.httpClient.post<IUser>(this.apiUrl + '/users', user)
      .subscribe(
        data => this._users.next([...this._users.getValue(), data]),
        error => console.log('UserService: error creating user', error)
      );
  }

  updateUser(userId: number, userChanges: Partial<IUser>): void {
    const updatedUsers = [...this._users.getValue()];
    const index = this._users.getValue().findIndex(user => user.id == userChanges.id);

    this.httpClient.put<IUser>(this.apiUrl + '/users', userChanges)
      .subscribe(
        data => {
          updatedUsers[index] = data;
          this._users.next(updatedUsers);
        },
        error => console.log('UserService: error creating user', error)
      );
  }

  deleteUser(userToDelete: IUser): void {
    const index = this._users.getValue().findIndex(user => user.id == userToDelete.id);
    if (index < 0) {
      throwError(error('No User with that id in the data store!'));
    }
    this.httpClient.delete<IUser>(this.apiUrl + '/users/' + userToDelete.id)
      .subscribe(
        response => this._users.next(this._users.getValue().splice(index, 1)),
        err => console.log('UserService: could not delete user with id ' + userToDelete.id, err));
  }

}
