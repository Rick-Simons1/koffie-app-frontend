import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { AlertService } from '../_alert';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css']
})
export class UserEditFormComponent implements OnInit {

  user: any = {};
  constructor(private userService: UserService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.userService.getLoggedInUser().subscribe(result => this.user = result);
  }

  onSubmit() {
    this.userService.updateUser(this.user).subscribe(result => this.sendAlertMsg(JSON.stringify(result)))
  }

  sendAlertMsg(result: string) {
    var msg = "";
    if (result === '{"response":"success"}') {
      msg = "succesfully updated the useraccount";
      this.alertService.success(msg)
      return msg;
    }
    else {
      msg = "username already exists";
      this.alertService.error(msg)
      return msg;
    }
  }

}
