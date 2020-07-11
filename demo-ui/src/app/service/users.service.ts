import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';

export abstract class UsersService {
  abstract getAll(): Observable<User[]>;

  // abstract updateUser(userId: number, userChanges: Partial<User>): void;
  //
  // abstract createUser(user: User, success?: (user: User) => void, error?: (err: any) => void): void;
  //
  // abstract deleteUser(userToDelete: User): void;
}


@Injectable({
  providedIn: 'root'
})
export class UsersServiceImpl implements UsersService {
  private readonly apiUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/users`);
  }

  // createUser(user: User, success?: (user: User) => void, error?: (err: any) => void): void {
  // }
  //
  // deleteUser(userToDelete: User): void {
  // }
  //
  // updateUser(userId: number, userChanges: Partial<User>): void {
  // }
}
