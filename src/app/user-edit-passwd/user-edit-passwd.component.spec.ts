import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditPasswdComponent } from './user-edit-passwd.component';

describe('UserEditPasswdComponent', () => {
  let component: UserEditPasswdComponent;
  let fixture: ComponentFixture<UserEditPasswdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditPasswdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditPasswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
