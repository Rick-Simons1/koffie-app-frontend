import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { AlertService } from '../_alert';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  user: User;

  constructor(private userdata: UserService, private alertService: AlertService) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  


  onSubmit() {
    console.log(this.user)
    this.userdata.RegisterUser(this.user).subscribe(result => this.sendAlertMsg(JSON.stringify(result)))
  }

  sendAlertMsg(result: string) {
    var msg = "";
    if (result === '{"response":"success"}') {
      msg = "succesfully regsitered the user";
      this.alertService.success(msg)
      return msg;
    }
    else {
      msg = "User name exists already please try again";
      this.alertService.error(msg)
      return msg;
    }
  }

  registerUser() {

  }

}
