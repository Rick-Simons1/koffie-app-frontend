import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user: any = {}

  constructor(private userservice: UserService, private router: Router) {
    this.userservice.getLoggedInUser().subscribe(result => { this.user = result })
  }

  ngOnInit(): void {
    
  }

  onClick() {
    this.router.navigate(['/account/edit'])
  }

  onClickPassword() {
    this.router.navigate(['/account/edit/password'])
  }



}
