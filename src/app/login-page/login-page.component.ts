import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';
import { error } from '@angular/compiler/src/util';
import { AlertModule, AlertService } from '../_alert';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private router: Router, private loginService: LoginServiceService, private alertService: AlertService) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.loginUser(this.user).subscribe(response => {
      const token = response.headers.get("Authorization");
      localStorage.setItem("token", token);
      this.router.navigate(['/account'])
      this.loginService.loggedIn = true;
      if (this.user.username == "admin") {
        this.loginService.admin = true;
      }
      else {
        this.loginService.admin = false;
      }
    }, error => this.handleError(error))
  }

  handleError(error: any) {
    if (error.status == 403) {
      this.sendAlertMsg(error.status)
    }
  }

  sendAlertMsg(result: number) {
    var msg = "";
    if (result === 403) {
      msg = "login credentials are wrong please try again";
      this.alertService.error(msg);
      return msg;
    }
    else {
      msg = "login succesfull";
      this.alertService.success(msg);
      return msg;
    }
  }

}
