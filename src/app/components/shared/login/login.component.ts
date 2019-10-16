import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private token: string;
  private errormessage: string;

  constructor( private router: Router,
               private loginService: LoginService) {
  }

  ngOnInit() {
  }

  logIn(username: string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.loginService.login(username, password).subscribe(
      res => {
        this.token = Object.values(res)[0];
        if (this.token != null) {
          localStorage.setItem('usertoken', this.token);
          this.errormessage = '';
          this.navigate();
        }
        else {
          localStorage.removeItem('usertoken');
          this.errormessage = 'Usuario y/o contraseña incorrectos!';
          console.log(res);
        }
      },
      error => {
        localStorage.removeItem('usertoken');
        this.errormessage = 'Usuario y/o contraseña incorrectos!';
        console.log(error);
      }
    );

  }

  navigate() {
    this.router.navigateByUrl('/inicio');
  }

}
