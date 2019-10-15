import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user_token: string;

  constructor(private router: Router, private http: HttpClient) {
  }

  public login(username: string, password: string) {
    return this.http.post('https://reqres.in/api/login', {
      email: username,
      password: password,
    });
  }

  public logout() {
    localStorage.removeItem('usertoken');
    this.user_token = '';
    this.router.navigateByUrl('/login');
    console.log("cerrar sesion");
  }

  public checktoken() {
    let token = localStorage.getItem('usertoken');
    if (token != null) {
      this.user_token = token;
      return true;
    }
    else {
      this.user_token = '';
      this.router.navigateByUrl('/login');
    }
  }
}
