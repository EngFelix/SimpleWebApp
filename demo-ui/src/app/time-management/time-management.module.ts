import {NgModule} from '@angular/core';
import {TimeManagementComponent} from './component/time-management.component';
import {EffectsModule} from '@ngrx/effects';
import {TimeManagementEffects} from './store/time-management.effects';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import * as fromReducer from './store/time-management.reducer';

@NgModule({
  declarations: [TimeManagementComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TimeManagementComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]),
    EffectsModule.forFeature([TimeManagementEffects]),
    StoreModule.forFeature(fromReducer.timeManagementFeatureKey, fromReducer.reducer)
  ],
  bootstrap: [TimeManagementComponent]
})
export class TimeManagementModule {
}
