import * as fromTimeManagement from './time-management.actions';

describe('loadTimeManagements', () => {
  it('should return an action', () => {
    expect(fromTimeManagement.loadTimeManagements().type).toBe('[TimeManagement] Load TimeManagements');
  });
});
