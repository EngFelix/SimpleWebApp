import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminPageComponent } from './user-admin-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('UserPageComponent', () => {
  let component: UserAdminPageComponent;
  let fixture: ComponentFixture<UserAdminPageComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ UserAdminPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdminPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
