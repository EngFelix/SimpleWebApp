import {Injectable} from '@angular/core';
import {DefaultDataService, HttpUrlGenerator, Logger, QueryParams} from '@ngrx/data';
import {User} from '../../../user/user.model';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class UserDataService extends DefaultDataService<User> {

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, logger: Logger) {
    super('User', http, httpUrlGenerator);
    logger.log('Created custom User EntityDataService');
  }

  getAll(): Observable<User[]> {
    return super.getAll().pipe(map(users => users.map(user => this.mapUser(user))));
  }

  getById(id: string | number): Observable<User> {
    return super.getById(id).pipe(map(user => this.mapUser(user)));
  }

  getWithQuery(params: string | QueryParams): Observable<User[]> {
    return super.getWithQuery(params).pipe(map(users => users.map(user => this.mapUser(user))));
  }

  private mapUser(user: User): User {
    return { ...user, birthDate: new Date(), createdAt: new Date(), lastModified: new Date() };
  }
// todo continue with  https://ngrx.io/guide/data/entity-dataservice
}
