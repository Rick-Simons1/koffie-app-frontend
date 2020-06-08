import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditFormComponent } from './user-edit-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { AlertService, AlertModule } from '../_alert';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserEditFormComponent', () => {
  let component: UserEditFormComponent;
  let fixture: ComponentFixture<UserEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserEditFormComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        AlertModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should give succes message', () => {
    var msg = '{"response":"success"}';
    expect(component.sendAlertMsg(msg)).toBe("succesfully updated the useraccount");

  });
  it('should give error message', () => {
    var msg = '{"response":""}';
    expect(component.sendAlertMsg(msg)).toBe("username already exists");
  });
});
