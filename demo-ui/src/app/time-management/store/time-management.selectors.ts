import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTimeManagement from './time-management.reducer';

export const selectTimeManagementState = createFeatureSelector<fromTimeManagement.State>(
  fromTimeManagement.timeManagementFeatureKey
);
