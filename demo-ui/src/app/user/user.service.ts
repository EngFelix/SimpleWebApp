import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from './user.model';

export abstract class UserService {

  protected abstract readonly apiUrl: string;

  abstract getUsers(): Observable<User[]>;

  abstract getUser(id: number): Observable<User>;

  abstract deleteUser(id: number): Observable<User>

  abstract createUser(model: User): Observable<User>;

  abstract updateUser(model: User): Observable<User>;
}


@Injectable({
  providedIn: 'root'
})
export class UsersServiceImpl extends UserService {
  protected readonly apiUrl = 'http://localhost:8080/api/users/';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(this.apiUrl + id);
  }

  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(this.apiUrl + id);
  }

  createUser(model: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, model);
  }

  updateUser(model: User): Observable<User> {
    return this.httpClient.put<User>(this.apiUrl, model);
  }
}
