import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

export const adminFeatureKey = 'admin';

export interface AdminState {

}

export const reducers: ActionReducerMap<AdminState> = {

};


export const metaReducers: MetaReducer<AdminState>[] = !environment.production ? [] : [];
