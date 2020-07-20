import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import * as fromUserActions from './user.actions';
import {of} from 'rxjs';
import {UserService} from '../user.service';


@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUserActions.loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map(users => fromUserActions.loadUsersSuccess({users})),
          catchError(error =>
            of(fromUserActions.loadUsersFailure({error}))
          )// catch Error
        )// users pipe
      )// merge map
    )// actions pipe
  );// createEffect;

  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUserActions.addUser),
      mergeMap(action =>
        this.userService.createUser(action.user).pipe(
          map(user => fromUserActions.addUserSuccess({user})),
          catchError(error => of(fromUserActions.addUserFailure({error})))
        )// service result pipe
      )// merge Map
    )// actions pipe
  );// createEffect;


  constructor(private actions$: Actions,
              private userService: UserService) {
  }

}
