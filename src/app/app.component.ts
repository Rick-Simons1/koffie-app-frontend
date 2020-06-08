import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String;
  loggedIn: boolean = false;
  isAdmin: boolean = false;
  user: User;

  constructor(private userService: UserService) {
    this.title = "koffie app"
    this.user = new User;
  }

  ngOnInit(): void {
    if (this.loggedIn === false) {
      localStorage.removeItem("token");
    }
  }



  logout() {
    this.loggedIn = false;
    localStorage.removeItem("token");
  }
}
