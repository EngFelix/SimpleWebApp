import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UserActionTypes} from '../actions/user.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {UsersService} from '../../service/users.service';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActionTypes.LoadUsers),
    mergeMap(() => this.usersService.getAll()
      .pipe(
        map(users => ({type: UserActionTypes.UsersLoaded, payload: users})),
        catchError(err => of({type: UserActionTypes.UsersLoadError, payload: err}))
      )// users pipe
    )//merge map
    )// actions pipe
  );// createEffect;

  constructor(private actions$: Actions,
              private usersService: UsersService) {
  }
}
