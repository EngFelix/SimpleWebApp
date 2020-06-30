import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

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
  abstract updateUser(userId: number, userChanges: Partial<IUser>);
  abstract createUser(user: IUser);
}


@Injectable({
  providedIn: 'root'
})
export class UserServiceImpl implements UserService{
  private _users = new BehaviorSubject<Array<IUser>>([]);
  private baseUrl = 'http://localhost:8080/api';
//  private dataStore: { users: Array<IUser> } = {users: []};
  readonly users$ = this._users.asObservable();

  constructor(private httpClient: HttpClient) {
    this.loadAll();
  }

  private loadAll(): void {
    const getUsers$ = this.httpClient.get<Array<IUser>>(this.baseUrl + '/users')
      .subscribe(
        data => this._users.next(data),
        error => console.log('UserService: error loading users', error)
      );

    // Todo: show loading
  }

  createUser(user: IUser): void {
    this.httpClient.post<IUser>(this.baseUrl + '/users', user)
      .subscribe(
        data => this._users.next([...this._users.getValue(), data]),
        error => console.log('UserService: error creating user', error)
      );
  }

  updateUser(userId: number, userChanges: Partial<IUser>): void {
    this.httpClient.put<IUser>(this.baseUrl + '/users', userChanges)
      .subscribe(
        data => this._users.next([...this._users.getValue(), data]),
        error => console.log('UserService: error creating user', error)
      );
  }



  //
  // private baseUrl = 'http://localhost:8080/api';
  // private _users = new BehaviorSubject<Array<IUser>>([]);
  // public readonly users$ : Observable<Array<IUser>> = this._users.asObservable();
  //
  // constructor(private httpClient:HttpClient) {
  //   console.log('UserServiceImpl created! Loading all users from spring backend...')
  //   this.loadAllUsers();
  // }
  //
  // private loadAllUsers() {
  //   const getUsers$ = this.httpClient.get<Array<IUser>>(this.baseUrl + '/users/')
  //     // Observable
  //     .pipe(
  //       map(response => response['payload']),
  //       catchError(err => {
  //         console.log('Could not load users', err);
  //         return throwError(err);
  //       }),
  //       tap(users => {
  //         console.log(users);
  //         this._users.next(users);
  //       })
  //     )
  //
  //
  //
  // }
  //
  // updateUser(userId: number, userChanges: Partial<IUser>): Observable<Array<IUser>> {
  //   const users: Array<IUser> = this._users.getValue();
  //   const index = users.findIndex(user => user.id == userId);
  //   const newUser : IUser = {
  //     ...users[index],
  //     ...userChanges
  //   }
  //   const updatedUsers: Array<IUser> = users.slice(0);
  //   updatedUsers[index] = newUser;
  //   this._users.next(updatedUsers);
  //   return this.httpClient.put<Array<IUser>>(this.baseUrl + '/users/' + userId, userChanges)
  //     .pipe(
  //       catchError(err => {
  //         console.log('Could not update user', err);
  //         return throwError(err);
  //       }),
  //       shareReplay()
  //     )
  // }
  //
  // createUser(user: IUser): Observable<Array<IUser>> {
  //   return this.httpClient.post<Array<IUser>>(this.baseUrl + '/users', user)
  //     .pipe(
  //       map(response => response['payload']),
  //       catchError(err => {
  //         console.log('Could not create user', err);
  //         return throwError(err);
  //       }),
  //       tap(users => this._users.next(users)),
  //       shareReplay()
  //     )
  // }

  // TODO: implement filter functions here?
}
