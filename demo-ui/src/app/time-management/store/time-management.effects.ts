import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as TimeManagementActions from './time-management.actions';



@Injectable()
export class TimeManagementEffects {

  loadTimeManagements$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(TimeManagementActions.loadTimeManagements),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => TimeManagementActions.loadTimeManagementsSuccess({ data })),
          catchError(error => of(TimeManagementActions.loadTimeManagementsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
