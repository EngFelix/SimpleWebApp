import { Action, createReducer, on } from '@ngrx/store';
import * as TimeManagementActions from './time-management.actions';

export const timeManagementFeatureKey = 'timeManagement';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(TimeManagementActions.loadTimeManagements, state => state),
  on(TimeManagementActions.loadTimeManagementsSuccess, (state, action) => state),
  on(TimeManagementActions.loadTimeManagementsFailure, (state, action) => state),

);

