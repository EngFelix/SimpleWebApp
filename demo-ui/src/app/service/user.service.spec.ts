import { TestBed } from '@angular/core/testing';

import { UserServiceImpl } from './user.service';

describe('UserServiceImpl', () => {
  let service: UserServiceImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
