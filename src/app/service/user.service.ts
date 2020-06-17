import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { TagContentType } from '@angular/compiler';
import { Observable } from 'rxjs';
import { LoginPageComponent } from '../login-page/login-page.component';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl: string;

  constructor(private http: HttpClient) {
    
  }

  public loginUser(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      observe: "response"
    }
    this.userUrl = "http://localhost:8080/login"
        //@ts-ignore
    return this.http.post(this.userUrl, user, httpOptions)
  }

  public RegisterUser(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    this.userUrl = "http://localhost:8080/register"
    return this.http.post<User>(this.userUrl, user, httpOptions)
  }

  public getLoggedInUser() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") }),
    }
    this.userUrl = "http://localhost:8080/user"
    return this.http.get<User>(this.userUrl, httpOptions);
  }

  public updateUser(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") }),
    }
    this.userUrl = "http://localhost:8080/user"
    return this.http.post<User>(this.userUrl, user, httpOptions);
  }

  public updateUserPassword(id: string, oldPasswd: string, newPasswd: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token") }),
      params: { id: id, oldPassword: oldPasswd, newPassword: newPasswd }
    }
    this.userUrl = "http://localhost:8080/user/password"
    return this.http.get(this.userUrl, httpOptions);
  }



  
}
