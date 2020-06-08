import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { PasswdModel } from '../model/passwd-model';
import { User } from '../model/user';
import { AlertService } from '../_alert';

@Component({
  selector: 'app-user-edit-passwd',
  templateUrl: './user-edit-passwd.component.html',
  styleUrls: ['./user-edit-passwd.component.css']
})
export class UserEditPasswdComponent implements OnInit {

  passwd: PasswdModel
  user: User;

  constructor(private userService: UserService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.passwd = new PasswdModel;
    this.userService.getLoggedInUser().subscribe(result => this.user = result);
  }

  onSubmit() {
    this.userService.updateUserPassword(this.user.id, this.passwd.oldPasswd, this.passwd.newPasswd).subscribe(result => this.sendAlertMsg(JSON.stringify(result)))
  }

  sendAlertMsg(result: string) {
    var msg = "";
    if (result === '{"response":"success"}') {
      msg = "succesfully changed the password";
      this.alertService.success(msg)
    }
    else {
      msg = "oldpassword didnt match the current password"
    }


  }

}
