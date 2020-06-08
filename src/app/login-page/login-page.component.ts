import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private router: Router, private app: AppComponent) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.loginUser(this.user).subscribe((response: HttpResponse<200>) => {
      console.log(response);
      const token = response.headers.get("Authorization");
      localStorage.setItem("token", token);
      this.router.navigate(['/account'])
      this.app.loggedIn = true;
      if (this.user.username == "admin") {
        this.app.isAdmin = true;
      }
      else {
        this.app.isAdmin = false;
      }
    });
  }

}