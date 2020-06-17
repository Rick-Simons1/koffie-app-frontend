import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './model/user';
import { LoginServiceService } from './service/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String;

  
  user: User;

  constructor(private userService: UserService, public loginService: LoginServiceService) {
    this.title = "Koffie-app"
    this.user = new User;
    loginService.admin = true;
  }

  ngOnInit(): void {
    if (this.loginService.loggedIn == false) {
      localStorage.removeItem("token");
      console.log("removed");
    }
  }



  logout() {
    this.loginService.loggedIn = false;
    localStorage.removeItem("token");
    console.log("loggedout");
  }
}
