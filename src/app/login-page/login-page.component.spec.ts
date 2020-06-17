import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from '../_alert';
import { browser } from 'protractor';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        AlertModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sould send error msg when credntials are wrong', () => {
    expect(component.sendAlertMsg(403)).toBe("login credentials are wrong please try again")
  })
  it('sould send succes msg when credntials are right', () => {
    expect(component.sendAlertMsg(200)).toBe("login succesfull")
  })

  it('test', () => {
    var user: User = new User();
    user.username = "admin";
    user.password = "password";
    component.user = user
    expect(fixture).toMatchSnapshot();
    
  });
});

describe('loginpage gui tests', () => {
  it('redirect to account', () => {
    
  })
});


