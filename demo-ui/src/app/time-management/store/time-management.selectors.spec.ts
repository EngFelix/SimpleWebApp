import * as fromTimeManagement from './time-management.reducer';
import { selectTimeManagementState } from './time-management.selectors';

describe('TimeManagement Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTimeManagementState({
      [fromTimeManagement.timeManagementFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
