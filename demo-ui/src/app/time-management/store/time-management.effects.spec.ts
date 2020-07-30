import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TimeManagementEffects } from './time-management.effects';

describe('TimeManagementEffects', () => {
  let actions$: Observable<any>;
  let effects: TimeManagementEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TimeManagementEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TimeManagementEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
