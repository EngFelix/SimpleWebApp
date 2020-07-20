import {Injectable} from '@angular/core';
import {EntityCollectionServiceBase} from '@ngrx/data';
import {User} from '../models/user.model'

@Injectable({providedIn: 'root'})
export class UserService extends EntityCollectionServiceBase<User> {
  [name: string]: any;

}
