import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditPasswdComponent } from './user-edit-passwd.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../service/user.service';
import { PasswdModel } from '../model/passwd-model';
import { User } from '../model/user';
import { AlertService, AlertModule } from '../_alert';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserEditPasswdComponent', () => {
  let component: UserEditPasswdComponent;
  let fixture: ComponentFixture<UserEditPasswdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserEditPasswdComponent],
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
    fixture = TestBed.createComponent(UserEditPasswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should give succes message', () => {
    var msg = '{"response":"success"}';
    expect(component.sendAlertMsg(msg)).toBe("succesfully changed the password");

  });
  it('should give error message', () => {
    var msg = '{"response":""}';
    expect(component.sendAlertMsg(msg)).toBe("oldpassword didnt match the current password");
  });
});
