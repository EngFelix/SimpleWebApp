import { createAction, props } from '@ngrx/store';

export const loadTimeManagements = createAction(
  '[TimeManagement] Load TimeManagements'
);

export const loadTimeManagementsSuccess = createAction(
  '[TimeManagement] Load TimeManagements Success',
  props<{ data: any }>()
);

export const loadTimeManagementsFailure = createAction(
  '[TimeManagement] Load TimeManagements Failure',
  props<{ error: any }>()
);
