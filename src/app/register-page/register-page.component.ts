import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  user: User;

  constructor(private userdata: UserService) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  


  onSubmit() {
    console.log(this.user)
    this.userdata.RegisterUser(this.user).subscribe(result => console.log(result))
  }

  registerUser() {

  }

}
